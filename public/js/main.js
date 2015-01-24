$(document).ready(function() {

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
            l = location.pathname.split('/');
            cn = l[l.length - 1];
            $.ajax({
                type: 'POST',
                data: {
                    bonfireInfo: {
                        completedWith : didCompleteWith,
                        solution: bonfireSolution,
                        bonfireHash: thisBonfireHash
                    }
                },
                url: '/completed-bonfire/'
            });
            console.log(didCompleteWith, bonfireSolution, thisBonfireHash); // TODO: remove debug statement
        }
    }

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

    // TODO: refactor this to create meaningful variable names, what the heck i l?
    $('.next-bonfire-button').on('click', function() {
        var bonfireSolution = myCodeMirror.getValue();
        var thisBonfireHash = passedBonfireHash || null;
        var didCompleteWith = $('#completed-with').text() || null;
        console.log(bonfireSolution, thisBonfireHash);
        completedBonfire(didCompleteWith, bonfireSolution, thisBonfireHash);
        l = location.pathname.split('/');
        window.location = '/bonfires/' + (parseInt(l[l.length - 1]) + 1);
    });
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

profileValidation.controller('emailSignUpController', ['$scope',
    function($scope) {

    }
]);

profileValidation.controller('emailSignInController', ['$scope',
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

profileValidation.directive('uniqueUsername', function($http) {
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
});

profileValidation.directive('uniqueEmail', function($http) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
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
});