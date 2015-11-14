/**
 * Created by izabela on 14/11/15.
 */
angular.module("jeviteca").controller("AlbumsCtrl", function($scope, Albums){
    $scope.albums = Albums.data;


    $scope.addUrls = function() {
        for (var i= 0; i<$scope.albums.length; i++){
            $scope.albums[i].image = "resources/img/"+ $scope.albums[i].image;
        }
    };


});