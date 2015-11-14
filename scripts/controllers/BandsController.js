/**
 * Created by izabela on 14/11/15.
 */
angular.module("jeviteca").controller("BandsCtrl", function($scope, Bands){
    $scope.bands = Bands.data;
});