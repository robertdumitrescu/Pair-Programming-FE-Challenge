app.controller('SeoController', ['$scope', '$rootScope', '$interval', function($scope, $rootScope, $interval) {

    $scope.number = 0;
    $interval(function(){
        $scope.number++;
    },100);


}]);