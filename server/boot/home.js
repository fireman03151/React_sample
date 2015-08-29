import { defaultProfileImage } from '../../common/utils/constantStrings.json';

const message =
  'Learn to Code JavaScript and get a Coding Job by Helping Nonprofits';

module.exports = function(app) {
  var router = app.loopback.Router();
  router.get('/', addDefaultImage, index);

  app.use(router);

  function addDefaultImage(req, res, next) {
    if (!req.user || req.user.picture) {
      return next();
    }
    req.user.picture = defaultProfileImage;
    req.user.save(function(err) {
      if (err) { return next(err); }
      next();
    });
  }

  function index(req, res) {
    if (req.user) {
      return res.render('resources/get-started', { title: message });
    }
    res.render('home', { title: message });
  }
};
