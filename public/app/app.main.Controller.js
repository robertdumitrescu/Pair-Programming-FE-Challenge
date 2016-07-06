app.controller("MainController", function ($rootScope, $timeout, $location) {

    $rootScope.persons = [];

    $rootScope.goToUrl = function (targetRoute) {

        $location.path(targetRoute);

    };

});