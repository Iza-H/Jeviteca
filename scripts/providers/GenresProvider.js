/**
 * Created by izabela on 14/11/15.
 */

angular.module("jeviteca").service("GenresProvider", function($http){
        this.getGenres = function () {
                return $http.get("resources/data" + "/genres.json");
        }

    }
);