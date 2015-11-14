/**
 * Created by izabela on 14/11/15.
 */
angular.module("jeviteca").directive("albumElement", function(){
    return{
        restrict : "EA",
        templateUrl : "views/ElementoAlbum.html",


        scope:{
            album : "=",
            valueFavourite : "=",
        },

        link: function(scope, AlbumsProvider){
            scope.saveFavourite = function (){
                debugger;
                AlbumsProvider.saveFavourite(scope.album.id, scope.valueFavourite);
            }


        }


    }





});
