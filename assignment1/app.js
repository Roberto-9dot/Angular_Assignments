(function () {
    'use strict';

    angular.module("LunchCheck", [])

    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = [$scope];

    function LunchCheckController($scope) {
        $scope.check_list = function () {
            var num_item = $scope.dish_list;
            if (num_item == "" || num_item == null) {
                num_item = 0;
            }
            else {
                num_item = num_item.split(",").length;
            }
            if (num_item == 0) {
                $scope.message = "Please enter data first";
            }
            if (0 < num_item <= 3) {
                $scope.message = "Enjoy!";
            }           
            if (num_item > 3) {
                $scope.message = "Too much!";
            }
        }
        
    };


})();