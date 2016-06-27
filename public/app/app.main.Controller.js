app.controller("MainController", function ($rootScope, $timeout, $location) {

    $rootScope.goToUrl = function (targetRoute) {

        $location.path(targetRoute);

    };

});