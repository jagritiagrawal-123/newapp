(function() {
    'use strict';

    angular
        .module('login', [
            'ui.router'
        ])
    .config(config) 
      .factory('list',function (){
      var courselist =[];
      return{
      getallcourse : function (){
        return courselist;
      },
      setallcourse : function (list) {
        courselist=list;
      }
    }
    });
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
                url: '/candidate/',
                templateUrl: 'Log-in/Candidate.html',
                params:{
                  id:{
                      array:false
                  },
                  der:{
                    array:false
                  }
                }
            });
           

    }
})();
