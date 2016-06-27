

app.controller('UsersListingController', [ '$scope', '$http', function($scope, $http) {
  $scope.UserList = [];
  $http({
  method: 'GET',
  url: 'http://localhost:3000/api/users/json'
}).then(function successCallback(res) {
  $scope.UserList = res.data.data;
  }, function errorCallback(res) {
    console.log(res);
  });


}]);
