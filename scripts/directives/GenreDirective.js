/**
 * Created by izabela on 14/11/15.
 */
angular.module("jeviteca").directive("genreElement", function(){
        return{
            restrict : "EA",
            templateUrl : "views/ElementGenre.html",


            scope:{
                genre:"=",
            },

            link: function(scope){

            }


        }




});
