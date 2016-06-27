app.controller('UsersAddController', ['$scope', function($scope) {
  $scope.User = {};
  $scope.saveUser = function () {
    console.log($scope.User);

  }

}]);
