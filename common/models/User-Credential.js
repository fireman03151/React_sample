import { Observable } from 'rx';
import debug from 'debug';

import { observeMethod, observeQuery } from '../../server/utils/rx';
import {
  createUserUpdatesFromProfile,
  getSocialProvider
} from '../../server/utils/auth';

const log = debug('fcc:models:UserCredential');
module.exports = function(UserCredential) {
  UserCredential.link = function(
    userId,
    _provider,
    authScheme,
    profile,
    credentials,
    options = {},
    cb
  ) {
    if (typeof options === 'function' && !cb) {
      cb = options;
      options = {};
    }
    const User = UserCredential.app.models.User;
    const findCred = observeMethod(UserCredential, 'findOne');
    const createCred = observeMethod(UserCredential, 'create');

    const provider = getSocialProvider(_provider);
    const query = {
      where: {
        provider: provider,
        externalId: profile.id
      }
    };

    // find createCred if they exist
    // if not create it
    // if yes, update credentials
    // also if github
    //  update profile
    //  update username
    //  update picture
    log('link query', query);
    return findCred(query)
      .flatMap(_credentials => {
        const modified = new Date();
        const updateUser = User.update$(
          { id: userId },
          createUserUpdatesFromProfile(provider, profile)
        );
        let updateCredentials;
        if (!_credentials) {
          updateCredentials = createCred({
            provider,
            externalId: profile.id,
            authScheme,
            // we no longer want to keep the profile
            // this is information we do not need or use
            profile: null,
            credentials,
            userId,
            created: modified,
            modified
          });
        } else {
          _credentials.credentials = credentials;
          updateCredentials = observeQuery(
          _credentials,
            'updateAttributes',
            {
              profile: null,
              credentials,
              modified
            }
          );
        }
        return Observable.combineLatest(
          updateUser,
          updateCredentials,
          (_, credentials) => credentials
        );
      })
      .subscribe(
        credentials => cb(null, credentials),
        cb
      );
  };
};
