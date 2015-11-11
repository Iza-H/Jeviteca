/**
 * Created by izabela on 11/11/15.
 */


angular.module("jeviteca").controller("NavSelectedCtrl", function($scope, $route){
    $scope.isAlbumSelected = function(){
        return $route.current && $route.current.$$route.originalPath === "/albums";
    };
    $scope.isBandasSelected = function(){
        return $route.current && $route.current.$$route.originalPath === "/bandas";

    };
    $scope.isGenerosSelected = function(){
        return $route.current && $route.current.$$route.originalPath === "/generos";
    };

});