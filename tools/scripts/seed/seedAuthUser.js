const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const debug = require('debug');

const log = debug('fcc:tools:seedLocalAuthUser');
const { MONGOHQ_URL } = process.env;

function handleError(err, client) {
  if (err) {
    console.error('Oh noes!! Error seeding local auth user.');
    console.error(err);
    try {
      client.close();
    } catch (e) {
      // no-op
    } finally {
      /* eslint-disable-next-line no-process-exit */
      process.exit(1);
    }
  }
}

MongoClient.connect(MONGOHQ_URL, { useNewUrlParser: true }, function(
  err,
  client
) {
  handleError(err, client);

  log('Connected successfully to mongo');

  const db = client.db('freecodecamp');
  const user = db.collection('user');

  user.deleteOne({ _id: ObjectId('5bd30e0f1caf6ac3ddddddb5') }, err => {
    handleError(err, client);

    try {
      user.insertOne({
        _id: ObjectId('5bd30e0f1caf6ac3ddddddb5'),
        email: 'foo@bar.com',
        emailVerified: true,
        progressTimestamps: [],
        isBanned: false,
        isCheater: false,
        username: 'developmentuser',
        about: '',
        name: 'Development User',
        location: '',
        picture: 'https://github.com/identicons/camperbot.png',
        acceptedPrivacyTerms: true,
        sendQuincyEmail: false,
        currentChallengeId: '',
        isHonest: false,
        isFrontEndCert: false,
        isDataVisCert: false,
        isBackEndCert: false,
        isFullStackCert: false,
        isRespWebDesignCert: false,
        is2018DataVisCert: false,
        isFrontEndLibsCert: false,
        isJsAlgoDataStructCert: false,
        isApisMicroservicesCert: false,
        isInfosecQaCert: false,
        isQaCert: false,
        isInfosecCert: false,
        is2018FullStackCert: false,
        isSciCompPyCert: false,
        isDataAnalysisPyCert: false,
        isMachineLearningPyCert: false,
        completedChallenges: [],
        portfolio: [],
        yearsTopContributor: [],
        rand: 0.6126749173148205,
        theme: 'default',
        profileUI: {
          isLocked: true,
          showAbout: false,
          showCerts: false,
          showDonation: false,
          showHeatMap: false,
          showLocation: false,
          showName: false,
          showPoints: false,
          showPortfolio: false,
          showTimeLine: false
        },
        badges: {
          coreTeam: []
        },
        isDonating: false,
        emailAuthLinkTTL: null,
        emailVerifyTTL: null
      });
    } catch (e) {
      handleError(e, client);
    } finally {
      log('local auth user seed complete');
      client.close();
    }
  });
});
