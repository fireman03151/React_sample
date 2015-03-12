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

    $('.start-challenge').on('click', function() {
        $(this).parent().remove();
        $('.challenge-content')
            .removeClass('hidden-element')
            .addClass('animated fadeInDown');
    });

    $('.completed-challenge').on('click', function() {
        $('#complete-challenge-dialog').modal('show');
        // Only post to server if there is an authenticated user
        if ($('.signup-btn-nav').length < 1) {
            l = location.pathname.split('/');
            cn = l[l.length - 1];
            $.ajax({
                type: 'POST',
                data: {challengeNumber: cn},
                url: '/completed-challenge/'
            });
        }
    });

    function completedBonfire(didCompleteWith, bonfireSolution, thisBonfireHash) {
        $('#complete-bonfire-dialog').modal('show');
        // Only post to server if there is an authenticated user
        if ($('.signup-btn-nav').length < 1) {

            $.post(
                '/completed-bonfire',
                {
                    bonfireInfo: {
                        completedWith : didCompleteWith,
                        solution: bonfireSolution,
                        bonfireHash: thisBonfireHash
                    }
                },
                function(res) {
                if (res) {
                    window.location.href = '/bonfires'
                }
            });
        }
    }

    $('.next-bonfire-button').on('click', function() {
        var bonfireSolution = myCodeMirror.getValue();
        var thisBonfireHash = passedBonfireHash || null;
        var didCompleteWith = $('#completed-with').val() || null;
        completedBonfire(didCompleteWith, bonfireSolution, thisBonfireHash);

    });
    $('#completed-courseware').on('click', function() {
        $('#complete-courseware-dialog').modal('show');
    });

    $('#complete-courseware-dialog').on('keypress', function(e) {
      if (e.which === 13 || e === 13) {
        $('#next-courseware-button').click();
      }
    });

    $('#complete-bonfire-dialog').on('hidden.bs.modal', function() {
        editor.focus();
    });

    $('#complete-courseware-dialog').on('hidden.bs.modal', function() {
        editor.focus();
    });
    $('#next-courseware-button').on('click', function() {
        if ($('.signup-btn-nav').length < 1) {
            $.post(
                '/completed-courseware',
                {
                    coursewareInfo: {
                        coursewareHash: passedCoursewareHash
                    }
                },
                function(res) {
                    if (res) {
                        window.location.href = '/coursewares'
                    }
                })
        }
    })

    $('.all-challenges').on('click', function() {
        $('#all-challenges-dialog').modal('show');
    });

    $('.all-bonfires').on('click', function() {
        $('#all-bonfires-dialog').modal('show');
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
            if (upVotes[i].upVotedBy === user._id) {
                alreadyUpvoted = true;
                break;
            }
        }
        if (!alreadyUpvoted) {
            $.post('/stories/upvote',
                {
                    data: {
                        id: _id,
                        upVoter: user
                    }
                })
                .fail(function (xhr, textStatus, errorThrown) {
                    $('#upvote').bind('click', upvoteHandler);
                })
                .done(function (data, textStatus, xhr) {
                    $('#storyRank').text(data.rank);
                });
        }
    };
    $('#upvote').on('click', upvoteHandler);

    var storySubmitButtonHandler = function storySubmitButtonHandler() {

        var link = $('#story-url').val();
        var headline = $('#story-title').val();
        var description = $('#description-box').val();
        var userDataForUpvote = {
            upVotedBy: user._id,
            upVotedByUsername: user.profile.username
        };
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
                    upVotes: [userDataForUpvote],
                    author: {
                        picture: user.profile.picture,
                        userId: user._id,
                        username: user.profile.username
                    },
                    comments: [],
                    image: storyImage
                }
            })
            .fail(function (xhr, textStatus, errorThrown) {
                $('#story-submit').bind('click', storySubmitButtonHandler);
            })
            .done(function (data, textStatus, xhr) {
                window.location = '/stories/' + JSON.parse(data).storyLink;
            });

    };

    $('#story-submit').on('click', storySubmitButtonHandler);

    var commentSubmitButtonHandler = function commentSubmitButtonHandler() {
        $('comment-button').unbind('click');
        var data = $('#comment-box').val();

        $('#comment-button').attr('disabled', 'disabled');
        $.post('/stories/comment/',
            {
                data: {
                    associatedPost: storyId,
                    body: data,
                    author: {
                        picture: user.profile.picture,
                        userId: user._id,
                        username: user.profile.username
                    }
                }
            })
            .fail(function (xhr, textStatus, errorThrown) {
                $('#comment-button').attr('disabled', false);
            })
            .done(function (data, textStatus, xhr) {
                window.location.reload();
            });

    };

    $('#comment-button').on('click', commentSubmitButtonHandler);
});

var profileValidation = angular.module('profileValidation',['ui.bootstrap']);
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

profileValidation.directive('uniqueUsername',['$http',function($http) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            element.bind("keyup", function (event) {
                ngModel.$setValidity('unique', true);
                if (element.val()) {
                    $http.get("/api/checkUniqueUsername/" + element.val()).success(function (data) {
                        if (element.val() == scope.storedUsername) {
                            ngModel.$setValidity('unique', true);
                        } else if (data) {
                            ngModel.$setValidity('unique', false);
                        }
                    });
                }
            });
        }
    }
}]);

profileValidation.directive('existingUsername', ['$http', function($http) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            element.bind("keyup", function (event) {
                if (element.val().length > 0) {
                    ngModel.$setValidity('exists', false);
                } else {
                    element.removeClass('ng-dirty');
                    ngModel.$setPristine();
                }
                if (element.val()) {
                    $http
                    .get("/api/checkExistingUsername/" + element.val())
                    .success(function (data) {
                        ngModel.$setValidity('exists', data);
                    });
                }
            });
        }
    }
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
                        if (element.val() == scope.storedEmail) {
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
