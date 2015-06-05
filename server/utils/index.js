var path = require('path'),
    // debug = require('debug')('freecc:cntr:resources'),
    cheerio = require('cheerio'),
    request = require('request'),
    R = require('ramda'),
    _ = require('lodash'),
    fs = require('fs'),


    resources = require('./resources.json'),
    nonprofits = require('../../seed/nonprofits.json'),
    fieldGuides = require('../../seed/field-guides.json');

/**
 * Cached values
 */
var allFieldGuideIds, allFieldGuideNames, allNonprofitNames,
  challengeMap, challengeMapForDisplay, challengeMapWithIds,
  challengeMapWithNames, allChallengeIds, allChallenges;

/**
 * GET /
 * Resources.
 */

Array.zip = function(left, right, combinerFunction) {
  var counter,
    results = [];

  for (counter = 0; counter < Math.min(left.length, right.length); counter++) {
    results.push(combinerFunction(left[counter], right[counter]));
  }

  return results;
};

(function() {
  if (!challengeMap) {
    var localChallengeMap = {};
    var files = fs.readdirSync(
      path.join(__dirname, '../../seed/challenges')
    );
    var keyCounter = 0;
    files = files.map(function (file) {
      return require(
        path.join(__dirname, '../../seed/challenges/' + file)
      );
    });
    files = files.sort(function (a, b) {
      return a.order - b.order;
    });
    files.forEach(function (file) {
      localChallengeMap[keyCounter++] = file;
    });
    challengeMap = _.cloneDeep(localChallengeMap);
  }
})();


module.exports = {
  getChallengeMapForDisplay: function () {
    if (!challengeMapForDisplay) {
      challengeMapForDisplay = {};
      Object.keys(challengeMap).forEach(function (key) {
        challengeMapForDisplay[key] = {
          name: challengeMap[key].name,
          dashedName: challengeMap[key].name.replace(/\s/g, '-'),
          challenges: challengeMap[key].challenges,
          completedCount: challengeMap[key].challenges
        };
      });
    }
    return challengeMapForDisplay;
  },

  getChallengeMapWithIds: function () {
    if (!challengeMapWithIds) {
      challengeMapWithIds = {};
      Object.keys(challengeMap).forEach(function (key) {
        var onlyIds = challengeMap[key].challenges.map(function (elem) {
          return elem.id;
        });
        challengeMapWithIds[key] = onlyIds;
      });
    }
    return challengeMapWithIds;
  },

  allChallengeIds: function () {

    if (!allChallengeIds) {
      allChallengeIds = [];
      Object.keys(this.getChallengeMapWithIds()).forEach(function (key) {
        allChallengeIds.push(challengeMapWithIds[key]);
      });
      allChallengeIds = R.flatten(allChallengeIds);
    }
    return allChallengeIds;
  },

  allChallenges: function () {
    if (!allChallenges) {
      allChallenges = [];
      Object.keys(this.getChallengeMapWithNames()).forEach(function (key) {
        allChallenges.push(challengeMap[key].challenges);
      });
      allChallenges = R.flatten(allChallenges);
    }
    return allChallenges;
  },

  getChallengeMapWithNames: function () {
    if (!challengeMapWithNames) {
      challengeMapWithNames = {};
      Object.keys(challengeMap).
        forEach(function (key) {
          var onlyNames = challengeMap[key].challenges.map(function (elem) {
            return elem.name;
          });
          challengeMapWithNames[key] = onlyNames;
        });
    }
    return challengeMapWithNames;
  },


  randomPhrase: function () {
    return resources.phrases[
      Math.floor(Math.random() * resources.phrases.length)
      ];
  },

  randomVerb: function () {
    return resources.verbs[
      Math.floor(Math.random() * resources.verbs.length)
      ];
  },

  randomCompliment: function () {
    return resources.compliments[
      Math.floor(Math.random() * resources.compliments.length)
      ];
  },

  allFieldGuideIds: function () {
    if (allFieldGuideIds) {
      return allFieldGuideIds;
    } else {
      allFieldGuideIds = fieldGuides.map(function (elem) {
        return elem.id;
      });
      return allFieldGuideIds;
    }
  },

  allFieldGuideNamesAndIds: function () {
    if (allFieldGuideNames) {
      return allFieldGuideNames;
    } else {
      allFieldGuideNames = fieldGuides.map(function (elem) {
        return {
          name: elem.name,
          dashedName: elem.dashedName,
          id: elem.id
        };
      });
      return allFieldGuideNames;
    }
  },

  allNonprofitNames: function () {
    if (allNonprofitNames) {
      return allNonprofitNames;
    } else {
      allNonprofitNames = nonprofits.map(function (elem) {
        return {name: elem.name};
      });
      return allNonprofitNames;
    }
  },

  whichEnvironment: function () {
    return process.env.NODE_ENV;
  },

  getURLTitle: function (url, callback) {
    (function () {
      var result = {title: '', image: '', url: '', description: ''};
      request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          var $ = cheerio.load(body);
          var metaDescription = $("meta[name='description']");
          var metaImage = $("meta[property='og:image']");
          var urlImage = metaImage.attr('content') ?
            metaImage.attr('content') :
            '';

          var metaTitle = $('title');
          var description = metaDescription.attr('content') ?
            metaDescription.attr('content') :
            '';

          result.title = metaTitle.text().length < 90 ?
            metaTitle.text() :
          metaTitle.text().slice(0, 87) + '...';

          result.image = urlImage;
          result.description = description;
          callback(null, result);
        } else {
          callback(new Error('failed'));
        }
      });
    })();
  }
};
