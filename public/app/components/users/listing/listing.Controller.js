

app.controller('UsersListingController', ['$scope', '$rootScope', '$http',function($scope, $rootScope, $http) {

    $scope.testFunction = function () {

        $http.get('/api/users/json').then(function(data) {
            console.log(data.data.data);

            for (var i = 0; i < data.data.data.length; i++){
                $rootScope.persons.push(data.data.data[i]);

            }

        })

    };

}]);