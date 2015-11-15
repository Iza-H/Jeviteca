/**
 * Created by izabela on 15/11/15.
 */
angular.module("jeviteca").controller("DetalleAlbumCtrl", function($scope, $window, Properties, Albums, Id){
    $scope.album = Albums.data;
    $scope.id = Id;

    $scope.takeOneAlbum= function(OneObjectFilter) {
        for (var i=0; i<$scope.album.length; i++){
            if ($scope.album[i].id==$scope.id){
                $scope.album[i].image = Properties.resourcesImgUrl + $scope.album[i].image;
                $scope.album[i].wikiurl="https://es.wikipedia.org/wiki/Special:Search?search=" + encodeURIComponent($scope.album[i].title);
                $scope.album=$scope.album[i];
            }
        }
    }





});