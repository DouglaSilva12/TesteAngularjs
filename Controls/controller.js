var app = angular.module('Home'['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when("/Menu",{
        templateUrl : "Pages/Menu.html",
        controller : 'MenuCtrl'
    });
    $routeProvider.when('/Descrição',{
        templateUrl : "Pages/Descrição.html",
        controller : "DescricaoCtrl"
    });
    $routeProvider.otherwise({ redirectTo: '/Home'});
});
app.controller('MenuCtrl', function($scope){
    $scope.message = "Bem vindo aos menus";
});
app.controller('DescricaoCtrl', function($scope){
    $scope.message = "Tudo sobre seu Prato";
});
