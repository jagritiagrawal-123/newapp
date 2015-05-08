(function() {
'use strict';
angular
    .module('login')
    .controller('Logincontroller', ['$state','$scope', function($state,$scope) {
        var vm = this;
         vm.arr1 = [];
         vm.xyz;
        vm.arr = [];

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
        vm.deg1 = vm.deg;
        vm.br1 = vm.br;

        vm.add = function() {
            vm.arr = [];
            vm.arr.push(vm.deg.value);

            vm.arr.push(vm.br);

            console.log(vm.arr);
        };


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
            console.log(vm.arr2);
        };

vm.getBranchNameFromId = function(branchid) {
    
    for (var i=0; i<vm.branches.length; i++) {

        if (vm.branches[i].id == branchid) {
            return vm.branches[i].value;
        }
    }
};

vm.updateBranch = function(xyz) {
   console.log(xyz);
    angular.forEach(vm.mappingObject, function(value, index) {

        if (xyz.id == vm.mappingObject[index].id) {
            angular.forEach(value.b_id, function(valu, ind) {
                vm.arr1.push(vm.getBranchNameFromId(valu));

            });
        }

    });
    console.log(vm.arr1);
};
vm.move = function() {
    $state.go('candidate');
};

}]);
}());
