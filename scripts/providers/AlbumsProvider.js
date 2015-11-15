/**
 * Created by izabela on 14/11/15.
 */

angular.module("jeviteca").service("AlbumsProvider", function($http, Properties){
    this.getAlbums = function () {
        return $http.get(Properties.resourcesDataUrl + "albums.json");

    }





    }
);