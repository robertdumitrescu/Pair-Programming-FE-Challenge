app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
    when('/users', {

        templateUrl: 'partials/users/listing',
        controller: 'UsersListingController'
    }).
    when('/users/add', {
        templateUrl: 'partials/users/add',
        controller: 'UsersAddController'
    }).
    otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
}]);