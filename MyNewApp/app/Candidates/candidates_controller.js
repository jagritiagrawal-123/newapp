(function() {
'use strict';
angular
    .module('candi')
    .controller('CandidateController', ['$state','$scope', 'slist','list',function($state,$scope,slist,list) {
        var vm = this;
        vm.regNo=1;
        vm.students=[];
        vm.studentArrayValue1;
        vm.newcourse= list.getallcourse();
       
          vm.addStud=function(){
          alert("1");
          vm.students.push({'regNo': vm.regNo,
                'fname': vm.fname,
                'lname': vm.lname,
                'dob': vm.dob,
                'doj':vm.doj,
                'cname': vm.cname,
                'branch':vm.branch
            });
          vm.regNo = "";
          vm.fname = "";
          vm.lname = "";
          vm.dob = "";
          vm.doj = "";
          vm.cname="";
          vm.branch="";
          console.log(vm.students);
          console.log(document.getElementById("rno").value);
          slist.setallstud(vm.students);
          console.log(vm.students.fname);
          alert("AddSuccess");
        }
}]);
}());