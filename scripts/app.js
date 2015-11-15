/**
 * Created by izabela on 11/11/15.
 */
//set of the module:
var jeviteca = angular.module("jeviteca", ['ngRoute']);

jeviteca.config(['$routeProvider', function($routeProvider, $filter, AlbumsProvider, BandsProvider, GeneresProvider) {
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
            when('/detallealbum/:idAlbum',{
                templateUrl: 'views/DetalleAlbum.html',
                controller: "DetalleAlbumCtrl",
                resolve:{
                    Albums: ['AlbumsProvider', function(AlbumsProvider){
                        return AlbumsProvider.getAlbums();
                    }],
                    Id:[ "$route", function($route){
                        debugger;
                        return $route.current.params.idAlbum;
                    }

                    ]
                    /*Albums:['AlbumsProvider', "$route","$filter", function(AlbumsProvider, $route, $filter){
                        var albums = AlbumsProvider.getAlbums().then(function(result){
                            var idAlbum =$route.current.params.idAlbum;
                            resultado = $filter('filter')(result.data, {"id" : idAlbum})[0];
                            return resultado;

                        });



                    }]*/
                }

            }).
            otherwise({
                redirectTo: '/albums'
            });
}]);