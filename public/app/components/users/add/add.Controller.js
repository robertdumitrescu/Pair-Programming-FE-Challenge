app.controller('UsersAddController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.user={};
    $scope.user.firstName = "";
    $scope.user.lastName = "";
    $scope.user.email = "";
$scope.submitform = function () {
    $rootScope.users.push($scope.user);
    
};

    $scope.test = function () {
        console.log($rootScope);
    }
}]);

