

app.controller('UsersListingController', [ '$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
  $rootScope.UserList = [];
  $scope.getUsers = function () {
    $http({
    method: 'GET',
    url: 'http://localhost:3000/api/users/json'
  }).then(function successCallback(res) {
    // $rootScope.UserList.push(res.data.data);
    // console.log($rootScope.UserList);
    for (var i = 0; i < res.data.data.length; i++) {
      $rootScope.UserList.push(res.data.data[i])
      console.log(res.data.data[i]);
    }
    }, function errorCallback(res) {
      console.log(res);
    });
  }


}]);
