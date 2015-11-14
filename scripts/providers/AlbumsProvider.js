/**
 * Created by izabela on 14/11/15.
 */

angular.module("jeviteca").service("AlbumsProvider", function($http){
    this.getAlbums = function () {
        return $http.get("resources/data" + "/albums.json");

    },

    this.saveFavourite = function (album, value){
        if (typeof (Storage)!=='unfifined'){
            localStorage.setItem("Album_" + album.id, value);
        }

    }

}
);