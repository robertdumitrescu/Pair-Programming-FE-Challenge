app.controller('UsersAddController', ["$scope" , "UserUtilities", function($scope, UserUtilities) {
    $scope.user = {};

    $scope.save = function(){
        UserUtilities.saveUser($scope.user);
        $scope.user = {};
    };

}]);