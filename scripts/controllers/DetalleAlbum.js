/**
 * Created by izabela on 15/11/15.
 */
angular.module("jeviteca").controller("DetalleAlbumCtrl", function($scope, Albums, Id){
    $scope.album = Albums.data;
    $scope.id = Id;

    $scope.takeOneAlbum= function(OneObjectFilter) {
        debugger;
        for (var i=0; i<$scope.album.length; i++){
            if ($scope.album[i].id==$scope.id){
                $scope.album=$scope.album[i];
            }
        }
    }


});