(function() {
    'use strict';

    angular
        .module('candi', [
            'ui.router'
        ])
    .config(config)
     .factory('slist',function (){
      var studentlist =[];
      return{
      getallstud : function (){
        return studentlist;
      },
      setallstud : function (slist) {
        studentlist=slist;
      }
    }
    }); 
    function config($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('Candidates/candi');
        $stateProvider
            .state('candid', {
                url: '/candid',
                templateUrl: 'Candidates/candidates.html',
                controller: 'CandidateController as vm'  
            })
           .state('view',{
            url:'/views',
            templateUrl:'Candidates/sview.html',
           }); 
           

    }
})();
