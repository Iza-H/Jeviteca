/**
 * Created by izabela on 14/11/15.
 */
angular.module("jeviteca").directive("albumElement",  function(){
    return{
        restrict : "EA",
        templateUrl : "views/ElementoAlbum.html",


        scope:{
            album : "=",
            onTitleClick : "&"
        },

        link: function(scope){
            scope.saveFavourite = function (){
                if (typeof (Storage)!=='unfifined'){
                    localStorage.setItem("Album_" + scope.album.id, scope.album.favourite);
                }

            }
            scope.titleClick = function(){
                scope.onTitleClick({idAlbum:scope.album.id}); //que enviamos fuera
            };


        }


    }





});
