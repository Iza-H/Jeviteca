/**
 * Created by izabela on 11/11/15.
 */
//set of the module:
var jeviteca = angular.module("jeviteca", ['ngRoute']);

jeviteca.config(['$routeProvider', function($routeProvider, AlbumsProvider, BandsProvider, GeneresProvider) {
        $routeProvider.
            when('/albums', {
                templateUrl: 'views/Albums.html',
                controller: 'AlbumsCtrl',
                resolve:{
                    Albums: ['AlbumsProvider', function(AlbumsProvider){
                     return AlbumsProvider.getAlbums();
                         /*.then(function successCallback(response) {

                         for (var i = 0; i<response.data.length; i++){
                             response.data[i].image = "resources/img"+response.data[i].image;
                         }
                         return response;
                     })*/
                     }]

                }
            }).
            when('/bands',{
                templateUrl: 'views/Bands.html',
                controller: 'BandsCtrl',
                resolve:{
                    Bands:["BandsProvider", function(BandsProvider){
                        return BandsProvider.getBrands();
                    }]
                }
            }).
            when('/genres',{
                templateUrl: 'views/Genres.html',
                controller: 'GenresCtrl',
                resolve:{
                    Genres:["GenresProvider", function(GenresProvider){
                        return GenresProvider.getGenres();
                    }]
                }

            }).
            otherwise({
                redirectTo: '/albumes'
            });
}]);