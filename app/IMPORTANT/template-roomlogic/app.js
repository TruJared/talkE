var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

    $scope.handle = '';

    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    $scope.mincharacters = 3;
    $scope.maxcharacters = 10;

    $scope.rules = [

        { rulename: "Must be atleast 3 characters" },
        { rulename: "Must have less than 10 characters" },
        { rulename: "Must not already be in use" } // how do I check for this??

    ];


}]);
