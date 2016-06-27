app.controller('UsersAddController', ['$scope', '$rootScope', function($rootScope, $scope) {
  $scope.User = {};
  $rootScope.UserList = [] ;
  $scope.saveUser = function () {
    console.log($scope.User);
    $rootScope.UserList.push($scope.User);
  }

}]);
