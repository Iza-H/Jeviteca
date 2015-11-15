/**
 * Created by izabela on 14/11/15.
 */
angular.module("jeviteca").controller("GenresCtrl", function($scope, Genres){
    $scope.genres = Genres.data;

    $scope.prepareData=function(){
        debugger;
        for (var i= 0; i<$scope.genres.length; i++) {
            for (var j = 0; j < $scope.genres[i].albums.length; j++) {
                $scope.genres[i].allAlbums += $scope.genres[i].albums[j].title ;

            }

        }
    }
});