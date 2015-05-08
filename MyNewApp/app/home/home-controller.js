/*(function() {
    'use strict';
*/
  /*  angular
        .module('home')
        /*.factory('practice', practice);

    /* @ngInject */
   /* function factory($http) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {
            var requestObject = {
                method: 'GET',
                url: 'exampl.json'
            };
            $http.get(requestObject).success(function(data) {
                console.log(data);
            });
        }
    }
})();*/


(function() {
    'use strict';

    /**
     * @ngdoc object
     * @name home.controller:HomeCtrl
     *
     * @description
     *
     */
    angular
        .module('home')
        .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl() {
        var vm = this;
        vm.ctrlName = 'HomeCtrl';
        activate();

        function activate() {
           /* console.log(practice.func());*/
        }
    }
}());


