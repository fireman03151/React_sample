import { modernChallenges, map, challenges } from './challenges';
import NotFound from '../components/NotFound/index.jsx';
import { addLang } from '../utils/add-lang';

export default {
  path: '/:lang',
  indexRoute: {
    onEnter(nextState, replace) {
      const { lang } = nextState.params;
      const { pathname } = nextState.location;
      replace(addLang(pathname, lang));
    }
  },
  childRoutes: [
    challenges,
    modernChallenges,
    map,
    {
      path: '*',
      component: NotFound
    }
  ]
};
