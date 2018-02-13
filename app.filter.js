var myapp = angular.module('myapp');

myapp.filter('customName', [function() {

return function(value, greeting){

    return greeting + " " + value.substr(0,6).toUpperCase();


};

}]);