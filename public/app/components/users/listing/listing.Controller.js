

app.controller('UsersListingController', ["$scope" , "UserUtilities", function($scope, UserUtilities) {

    $scope.list = UserUtilities.getUserList();

}]);