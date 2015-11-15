/**
 * Created by izabela on 14/11/15.
 */
angular.module("jeviteca").controller("AlbumsCtrl", function($scope, $location, Properties, Albums){
    $scope.albums = Albums.data;


    $scope.prepareDate = function() {
        for (var i= 0; i<$scope.albums.length; i++){
            //change url
            $scope.albums[i].image = Properties.resourcesImgUrl + $scope.albums[i].image;
            $scope.albums[i].genreName = $scope.albums[i].genre.name;
            $scope.albums[i].bandName = $scope.albums[i].band.name;
            //set favourite
            if (typeof (Storage)!=='unfifined'){
                if (localStorage.getItem("Album_" + $scope.albums[i].id)){
                    $scope.albums[i].favourite = localStorage.getItem("Album_" + $scope.albums[i].id);
                }else{
                    $scope.albums[i].favourite = false;
                }
            }else {
                $scope.albums[i].favourite = false;
            }

        }
    };


    $scope.showDetails = function(idAlbum){
        $location.path("/detallealbum/" + idAlbum);
    }


});