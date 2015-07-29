import { Store } from 'thundercats';

const { createRegistrar, setter, fromMany } = Store;
const initValue = {
  title: 'Learn To Code | Free Code Camp',
  username: null,
  picture: null,
  points: 0
};

export default Store(initValue)
  .refs({ displayName: 'AppStore' })
  .init(({ instance: appStore, args: [cat] }) => {
    const { setUser, setTitle } = cat.getActions('appActions');
    const register = createRegistrar(appStore);

    register(setter(fromMany(setUser, setTitle)));

    return appStore;
  });
