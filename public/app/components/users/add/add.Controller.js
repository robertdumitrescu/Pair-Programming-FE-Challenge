app.controller('UsersAddController', ['$rootScope', '$scope', function($rootScope, $scope) {

  

    $scope.save = function(){



        $rootScope.persons.push({
            "firstName" : $scope.firstname,
            "lastName" : $scope.surname,
            "email" : $scope.email
        });




    };

    $scope.test = function(){
        console.log($rootScope.persons)
    }

}]);

