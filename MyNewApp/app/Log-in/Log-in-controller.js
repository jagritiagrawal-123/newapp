(function() {
'use strict';
angular
    .module('login')
    .controller('Logincontroller', ['$state','$scope','list', function($state,$scope,list) {
        var vm = this;
         vm.arr1 = [];
        vm.arr = [];
       
        $scope.students=[];
        console.log($state);
        vm.degrees = [{
            'id': 1,
            'value': 'B-tech'

        }, {
            'id': 2,
            'value': 'B.E.'

        }, {
            'id': 3,
            'value': 'B.Sc'

        }];
        vm.branches = [{
            'id': 1,
            'value': 'Computer Science'

        }, {
            'id': 2,
            'value': 'EC'

        }, {
            'id': 3,
            'value': 'EN'

        }, {
            'id': 4,
            'value': 'ME'

        }];

        vm.mappingObject = [{
            'id': 1,
            'b_id': [1, 2]
        }, {
            'id': 2,
            'b_id': [2, 3]
        }, {
            'id': 3,
            'b_id': [1, 2, 3]
        }];
       
        vm.username1 = vm.username;
        vm.password1 = vm.password;
    vm.work = function() {
            if (vm.username == 'Jagriti' && vm.password == '12345') {
                alert("Username and Password is correct");
                $state.go("SuccessPage");
            }

        };
        init();
        vm.deg1 = vm.deg;
        vm.deg2=vm.deg;
        vm.br1 = vm.br;

        vm.add = function() {
            vm.arr3 = [];
            vm.newcourse = [];
            vm.newcourse.push({
                'cname':vm.cname,
                'br':vm.br
            });
           list.setallcourse(vm.newcourse);
            vm.arr.push(vm.deg.value);

            vm.arr.push(vm.br);
            vm.arr3.push(vm.deg.value);
            //console.log(vm.arr);
          vm.cname="";
            //console.log(vm.arr3);
 
        };
        function init() {
            if (list.getallcourse()) {
                vm.newcourse = list.getallcourse();
                
            }
        }
        vm.arr2 = [];
        vm.add1 = function() {
            alert("1");
            vm.arr2.push({
                'name': vm.name,
                'dob': vm.dob,
                'email': vm.email,
                'ph': vm.ph
            });

            vm.name = "";
            vm.dob = "";
            vm.email = "";
            vm.ph = "";
            //console.log(vm.arr2);
        };

         

vm.getBranchNameFromId = function(branchid) {
    for (var i=0; i<vm.branches.length; i++) {
        if (vm.branches[i].id == branchid) {
            return vm.branches[i].value;
        }
    }
};

vm.updateBranch = function(xyz) {
   //console.log(xyz);
    angular.forEach(vm.mappingObject, function(value, index) {

        if (xyz.id == vm.mappingObject[index].id) {
            angular.forEach(value.b_id, function(valu, ind) {
                vm.arr1.push(vm.getBranchNameFromId(valu));

            });
        }

    });
    //console.log(vm.arr1);
};

vm.moveToCandidatePage = function() {
    $state.go('SuccessPage.candidate', {
        id:{deg:'1'}
    });
};

}]);
}());
