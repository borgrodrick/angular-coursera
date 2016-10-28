(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$filter'];

    function LunchCheckController($scope, $filter) {
        $scope.checkTooMuch = function() {
            $scope.message = "hello world";
        };
    }

})();
