/**
 * Created by izabela on 11/11/15.
 */
//set of the module:
var jeviteca = angular.module("jeviteca", ['ngRoute']);

jeviteca.config(['$routeProvider', function($routeProvider, AlbumsProvider) {
        $routeProvider.
            when('/albums', {
                templateUrl: 'views/Albums.html',
                controller: 'AlbumsCtrl',
                resolve:{
                    Albums: ['AlbumsProvider', function(AlbumsProvider){
                     return AlbumsProvider.getAlbums();
                     }]

                }
            }).
            when('/bands',{
                templateUrl: 'views/Bands.html',
                controller: 'BandsCtrl'
                /*resolve:{
                    Bands:["BandsProvider", function(BandsProvider){
                        return BandsProvider.getBrands();
                    }]
                }*/
            }).
            when('/genres',{
                templateUrl: 'views/Genres.html',
                controller: 'GenresCtrl'
                /*resolve:{
                    Genres:["GenresProvider", function(GenresProvider){
                        return GenresProvider.getGenres();
                    }]
                }*/

            }).
            otherwise({
                redirectTo: '/albumes'
            });
}]);