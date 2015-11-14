/**
 * Created by izabela on 14/11/15.
 */
angular.module("jeviteca").controller("GenresCtrl", function($scope, Genres){
    $scope.genres = Genres.data;
});