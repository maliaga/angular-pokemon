/**
 * Created by maliaga on 3/6/17.
 */
(function (){
    angular.module('pokedex.services', []).factory('pokemonSevice', ['$http','$q', function ($http, $q) {
        function all() {
            var deferrer = $q.defer();

            $http.get('/pokemons.json')
                .success(function (data) {
                    deferrer.resolve(data);
            });

            return deferrer.promise;
        }

        return {
            all : all
        };
    }]);
})();