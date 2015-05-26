$(document).ready(function() {
  var challengeName = typeof challengeName !== undefined ? challengeName : 'Untitled';
  if (challengeName) {
    ga('send', 'event',  'Challenge', 'load', challengeName);
  }

  var CSRF_HEADER = 'X-CSRF-Token';

  var setCSRFToken = function(securityToken) {
    jQuery.ajaxPrefilter(function(options, _, xhr) {
      if (!xhr.crossDomain) {
        xhr.setRequestHeader(CSRF_HEADER, securityToken);
      }
    });
  };

  setCSRFToken($('meta[name="csrf-token"]').attr('content'));

  $('#i-want-help').on('click', function() {
    /*
    var editorValue = editor.getValue();
    var currentLocation = window.location.href;
    $.post(
      '/get-help',
      {
        payload: {
          code: editorValue,
          challenge: currentLocation
        }
      },
      function(res) {
        if (res) {
          window.open('https://freecode.slack.com/messages/help/', '_blank')
        }
      }
    );
    */
  });

  $('#i-want-help-editorless').on('click', function() {
    /*
    var currentLocation = window.location.href;
    $.post(
      '/get-help',
      {
        payload: {
          challenge: currentLocation
        }
      },
      function(res) {
        if (res) {
          window.open('https://freecode.slack.com/messages/help/', '_blank')
        }
      }
    );
    */
  });

  $('#report-issue').on('click', function() {
    window.open('https://github.com/freecodecamp/freecodecamp/issues/new?title=Challenge '+ window.location.href +' has an issue &body=Please%20tell%20us%20in%20detail%20here%20how%20we%20can%20make%20this%20challenge%20better.', '_blank')
  });

  $('#i-want-to-pair').on('click', function() {
    var currentLocation = window.location.href;
    $.post(
      '/get-pair',
      {
        payload: {
          challenge: currentLocation
        }
      },
      function(res) {
        if (res) {
          window.open('https://freecode.slack.com/messages/letspair/', '_blank')
        }
      }
    );
  });

  $('.checklist-element').each(function() {
    var checklistElementId = $(this).attr('id');
    if(!!localStorage[checklistElementId]) {
      $(this).children().children('li').addClass('faded');
      $(this).children().children('input').trigger('click');
    }
  });

  $('.start-challenge').on('click', function() {
    $(this).parent().remove();
    $('.challenge-content')
      .removeClass('hidden-element')
      .addClass('animated fadeInDown');
  });

  $('.challenge-list-checkbox').on('change', function() {
    var checkboxId = $(this).parent().parent().attr('id');
    if ($(this).is(":checked")) {
      $(this).parent().siblings().children().addClass('faded');
      if (!localStorage || !localStorage[checkboxId]) {
        localStorage[checkboxId] = true;
      }
    }
    if (!$(this).is(":checked")) {
      $(this).parent().siblings().children().removeClass('faded');
      if (localStorage[checkboxId]) {
        localStorage.removeItem(checkboxId);
      }
    }
  });

  function completedFieldGuide(fieldGuideId) {
    if ($('.signup-btn-nav').length < 1) {
      $.post(
        '/completed-field-guide',
        {
          fieldGuideInfo: {
            fieldGuideId: fieldGuideId
          }
        },
        function(res) {
          if (res) {
            window.location.href = '/field-guide'
          }
        });
    }
  }

  $('.next-field-guide-button').on('click', function() {
    var fieldGuideId = $('#fieldGuideId').text();
    completedFieldGuide(fieldGuideId);
  });

  $("img").error(function () {
    $(this).unbind("error").attr("src", "https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png");
  });

  $('#completed-courseware').on('click', function() {
    $('#complete-courseware-dialog').modal('show');
  });

  $('#completed-zipline-or-basejump').on('click', function() {
    $('#complete-zipline-or-basejump-dialog').modal('show');
  });

  $('#complete-courseware-dialog').on('hidden.bs.modal', function() {
    editor.focus();
  });
  var challengeTypes = {
    'HTML_CSS_JQ': 0,
    'JAVASCRIPT': 1,
    'VIDEO': 2,
    'ZIPLINE': 3,
    'BASEJUMP': 4,
    'BONFIRE': 5
  };
  $('#next-courseware-button').on('click', function() {
    if ($('.signup-btn-nav').length < 1) {
      switch (challengeType) {
        case challengeTypes.HTML_CSS_JQ:
        case challengeTypes.JAVASCRIPT:
        case challengeTypes.VIDEO:
          console.log(challenge_Id);
          $.post(
            '/completed-challenge/',
            {
              challengeInfo: {
                challengeId: challenge_Id,
                challengeName: challenge_Name
              }
            }).success(
            function(res) {
              if (res) {
                window.location.href = '/challenges/next-challenge';
              }
            }
          );
          break;
        case challengeTypes.ZIPLINE:
          var didCompleteWith = $('#completed-with').val() || null;
          var publicURL = $('#public-url').val() || null;
          $.post(
            '/completed-zipline-or-basejump/',
            {
              challengeInfo: {
                challengeId: challenge_Id,
                challengeName: challenge_Name,
                completedWith: didCompleteWith,
                publicURL: publicURL,
                challengeType: challengeType
              }
            }).success(
            function() {
              window.location.href = '/challenges/next-challenge';
            }).fail(
            function() {
              window.location.href = '/challenges';
            });
          break;
        case challengeTypes.BASEJUMP:
          var didCompleteWith = $('#completed-with').val() || null;
          var publicURL = $('#public-url').val() || null;
          var githubURL = $('#github-url').val() || null;
          $.post(
            '/completed-zipline-or-basejump/',
            {
              challengeInfo: {
                challengeId: challenge_Id,
                challengeName: challenge_Name,
                completedWith: didCompleteWith,
                publicURL: publicURL,
                githubURL: githubURL,
                challengeType: challengeType,
                verified: false
              }
            }).success(function() {
              window.location.href = '/challenges/next-challenge';
            }).fail(function() {
              window.location.replace(window.location.href);
            });
          break;
        case challengeTypes.BONFIRE:
          window.location.href = '/challenges/next-challenge';
        default:
          break;
      }
    }
  });

  $('.next-challenge-button').on('click', function() {
    l = location.pathname.split('/');
    window.location = '/challenges/' + (parseInt(l[l.length - 1]) + 1);
  });

  // Bonfire instructions functions
  $('#more-info').on('click', function() {
    ga('send', 'event',  'Challenge', 'more-info', challengeName);
    $('#brief-instructions').hide();
    $('#long-instructions').show().removeClass('hide');

  });
  $('#less-info').on('click', function() {
    $('#brief-instructions').show();
    $('#long-instructions').hide();
  });

  var upvoteHandler = function () {
    var _id = storyId;
    $('#upvote').unbind('click');
    var alreadyUpvoted = false;
    for (var i = 0; i < upVotes.length; i++) {
      if (upVotes[i].upVotedBy === B3BA669EC5C1DD70FB478221E067A7E1B686929C569F5E73561B69C8F42129B) {
        alreadyUpvoted = true;
        break;
      }
    }
    if (!alreadyUpvoted) {
      $.post('/stories/upvote',
        {
          data: {
            id: _id
          }
        })
        .fail(function (xhr, textStatus, errorThrown) {
          $('#upvote').bind('click', upvoteHandler);
        })
        .done(function (data, textStatus, xhr) {
          $('#upvote').text('Upvoted!').addClass('disabled');

          $('#storyRank').text(data.rank + " points");
        });
    }
  };
  $('#upvote').on('click', upvoteHandler);

  var storySubmitButtonHandler = function storySubmitButtonHandler() {

    var link = $('#story-url').val();
    var headline = $('#story-title').val();
    var description = $('#description-box').val();

    $('#story-submit').unbind('click');
    $.post('/stories/',
      {
        data: {
          link: link,
          headline: headline,
          timePosted: Date.now(),
          description: description,
          storyMetaDescription: storyMetaDescription,
          rank: 1,
          comments: [],
          image: storyImage
        }
      })
      .fail(function (xhr, textStatus, errorThrown) {
        $('#story-submit').bind('click', storySubmitButtonHandler);
      })
      .done(function (data, textStatus, xhr) {
        window.location = '/news/' + JSON.parse(data).storyLink;
      });

  };

  $('#story-submit').on('click', storySubmitButtonHandler);

  var commentSubmitButtonHandler = function commentSubmitButtonHandler() {
    $('#comment-button').unbind('click');
    var data = $('#comment-box').val();

    $('#comment-button').attr('disabled', 'disabled');
    $.post('/stories/comment/',
      {
        data: {
          associatedPost: storyId,
          originalStoryLink: originalStoryLink,
          originalStoryAuthorEmail: originalStoryAuthorEmail,
          body: data
        }
      })
      .fail(function (xhr, textStatus, errorThrown) {
        $('#comment-button').attr('disabled', false);
        $('#comment-button').bind('click', commentSubmitButtonHandler);
      })
      .done(function (data, textStatus, xhr) {
        window.location.reload();
      });
  };

  $('#comment-button').on('click', commentSubmitButtonHandler);
});

var profileValidation = angular.module('profileValidation',
  ['ui.bootstrap']);
profileValidation.controller('profileValidationController', ['$scope', '$http',
  function($scope, $http) {
    $http.get('/account/api').success(function(data) {
      $scope.user = data.user;
      $scope.user.profile.username = $scope.user.profile.username ? $scope.user.profile.username.toLowerCase() : undefined;
      $scope.storedUsername = data.user.profile.username;
      $scope.storedEmail = data.user.email;
      $scope.user.email = $scope.user.email ? $scope.user.email.toLowerCase() : undefined;
      $scope.user.profile.twitterHandle = $scope.user.profile.twitterHandle ? $scope.user.profile.twitterHandle.toLowerCase() : undefined;
      $scope.asyncComplete = true;
    });
  }
]);

profileValidation.controller('pairedWithController', ['$scope',
  function($scope) {
    $scope.existingUser = null;
  }
]);

profileValidation.controller('emailSignUpController', ['$scope',
  function($scope) {

  }
]);

profileValidation.controller('emailSignInController', ['$scope',
  function($scope) {

  }
]);

profileValidation.controller('URLSubmitController', ['$scope',
  function($scope) {

  }
]);

profileValidation.controller('nonprofitFormController', ['$scope',
  function($scope) {

  }
]);

profileValidation.controller('doneWithFirst100HoursFormController', ['$scope',
  function($scope) {

  }
]);

profileValidation.controller('submitStoryController', ['$scope',
  function($scope) {

  }
]);

profileValidation.directive('uniqueUsername', ['$http', function($http) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      element.bind("keyup", function (event) {
        ngModel.$setValidity('unique', true);
        if (element.val()) {
          $http.get("/api/checkUniqueUsername/" + element.val()).success(function (data) {
            if (element.val() === scope.storedUsername) {
              ngModel.$setValidity('unique', true);
            } else if (data) {
              ngModel.$setValidity('unique', false);
            }
          });
        }
      });
    }
  };
}]);

profileValidation.directive('existingUsername',
  ['$http', function($http) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        element.bind('keyup', function (event) {
          if (element.val().length > 0) {
            ngModel.$setValidity('exists', false);
          } else {
            element.removeClass('ng-dirty');
            ngModel.$setPristine();
          }
          if (element.val()) {
            $http
              .get('/api/checkExistingUsername/' + element.val())
              .success(function (data) {
                ngModel.$setValidity('exists', data);
              });
          }
        });
      }
    };
  }]);

profileValidation.directive('uniqueEmail', ['$http', function($http) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function getUnique (scope, element, attrs, ngModel) {
      element.bind("keyup", function (event) {
        ngModel.$setValidity('unique', true);
        if (element.val()) {
          $http.get("/api/checkUniqueEmail/" + encodeURIComponent(element.val())).success(function (data) {
            if (element.val() === scope.storedEmail) {
              ngModel.$setValidity('unique', true);
            } else if (data) {
              ngModel.$setValidity('unique', false);
            }
          });
        };
      });
    }
  }
}]);
