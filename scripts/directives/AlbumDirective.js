/**
 * Created by izabela on 14/11/15.
 */
angular.module("jeviteca").directive("albumElement", function(AlbumsProvider){
    return{
        restrict : "EA",
        templateUrl : "views/ElementoAlbum.html",


        scope:{
            album : "=",
        },

        link: function(scope, AlbumsProvider){
            scope.saveFavourite = function (){
                AlbumsProvider.saveFavourite(scope.album.id, scope.album.favourite);
            }


        }


    }





});
