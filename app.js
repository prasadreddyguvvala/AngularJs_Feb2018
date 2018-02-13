var myapp = angular.module('myapp', []);

myapp.controller('MyCtrl',[ '$scope' ,'AppService', 
function($scope,AppService){

   // $scope.students = AppService.getStudents();

   AppService.getStudents()
             .then(function(result){

                $scope.students = result;
             });


   // $scope.myval = "Hello";

    // $scope.onClick = function(){
    //     alert('clicked')
    // }

// var students = [
// {

//     name:'Prasad',
//     age: 10
// },
// {
//     name:'prasu',
//     age:12
// }

//     ];


    $scope.onViewBtnClick = function(student) {

        $scope.selectedStudent = student;
    };

    $scope.onBtnClick = function(event){
        console.log(event.target);
        AppService.getData().then(function(res){

            alert("data1 is" + res);
        })
    }

}]);