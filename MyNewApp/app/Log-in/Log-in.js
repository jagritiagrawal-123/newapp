(function() {
    'use strict';

    angular
        .module('login', [
            'ui.router'
        ])
    .config(config); 
    function config($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('Log-in/login');
        $stateProvider
            .state('log', {
                url: '/log',
                templateUrl: 'Log-in/Log-in.html',
                controller: 'Logincontroller as vm'
                
            })
            .state('SuccessPage', {
                url: '/SuccessPage',
                templateUrl: 'Log-in/SuccessPage.html'
            })
            .state('SuccessPage.candidate', {
                url: '/candidate',
               /* views:{
                '@':{*/

                     templateUrl: 'Log-in/Candidate.html'
                  /*   controller:'Logincontroller'
                }
            }*/
               
            });
           

    }
})();
