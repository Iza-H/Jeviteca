/**
 * Created by izabela on 14/11/15.
 */
angular.module("jeviteca").controller("AlbumsCtrl", function($scope, Albums){
    $scope.albums = Albums.data;
});