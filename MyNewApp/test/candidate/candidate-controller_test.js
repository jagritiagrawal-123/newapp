'use strict';
describe('login', function () {

  beforeEach(module('login')); 
describe('Logincontroller', function () {
  var ctrl;
 var scope = {};
 

  beforeEach(inject(function ($controller) {
    ctrl = $controller('Logincontroller',{$scope:scope});

  }));

  it('should be same branchname', function () {
  
  	/*scope.s=1;
  	scope.k=2;*/
  	//scope.i=0;
   //var list1=scope.a[0].id;
   var branchid=1;
  
  	var list=ctrl.getBranchNameFromId(1);
  
  	 expect(list).toBe("Computer Science");
     expect(ctrl.getBranchNameFromId(2)).toBe("EC");

   // expect(list).toBe('Jagriti Agrawal');
  });
});
});