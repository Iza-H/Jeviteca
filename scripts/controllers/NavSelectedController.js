/**
 * Created by izabela on 11/11/15.
 */


angular.module("jeviteca").controller("NavSelectedCtrl", function($scope, $route){
    $scope.isAlbumSelected = function(){
        return $route.current && $route.current.$$route.originalPath === "/albums";
    };
    $scope.isBandsSelected = function(){
        return $route.current && $route.current.$$route.originalPath === "/bands";

    };
    $scope.isGenresSelected = function(){
        return $route.current && $route.current.$$route.originalPath === "/genres";
    };

});