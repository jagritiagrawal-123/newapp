(function() {
    'use strict';

    /* @ngdoc object
     * @name newApp5
     * @requires $urlRouterProvider
     *
     * @description
     *
     */
    angular
        .module('newApp5', [

            'ui.router',
            'home',
            'login'
            

        ])

    .config(config);

    function config($urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    }
}());
