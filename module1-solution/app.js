(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.name = "Yaakov";
  $scope.menu = "";
  $scope.checkTooMuch = function() {

    if ($scope.menu == ""){
      $scope.name = "Please enter data first";
      return;
    }


    var items = getNumberOfItems($scope.menu);

    if (items <= 3)
      $scope.name = "Enjoy";
    else if (items > 3)
    $scope.name = "Too much";
  };

  function getNumberOfItems(string){
    var arrayOfstrings = string.split(',');
    return arrayOfstrings.length;
  }
}

})();
