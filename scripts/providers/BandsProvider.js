/**
 * Created by izabela on 14/11/15.
 */

angular.module("jeviteca").service("BandsProvider", function($http, Properties){
        this.getBrands = function(){
            return $http.get(Properties.resourcesDataUrl+ "bands.json");
        }
    }
);