/**
 * Created by izabela on 14/11/15.
 */

angular.module("jeviteca").service("GenresProvider", function($http, Properties){
        this.getGenres = function () {
                return $http.get(Properties.resourcesDataUrl + "genres.json");
        }

    }
);