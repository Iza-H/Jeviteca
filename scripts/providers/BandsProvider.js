/**
 * Created by izabela on 14/11/15.
 */

angular.module("jeviteca").service("BrandsProvider", function($http){
        this.getBrands = function(){
            return $http.get("resources/data"+ "/bands.json");
        }
    }
);