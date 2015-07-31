var app = angular.module('rsocial', ['ngRoute','ngMaterial', 'ngMdIcons']);

app.config(function ($routeProvider, $locationProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl: 'app/header/header.html',
        controller: 'headerController'
    })

        .when('/notfound', {
            templateUrl: 'app/notfound/notfound.html',
            controller: 'notfoundController'
        })

    // caso não seja nenhum desses, redirecione para a rota '/'
    .otherwise({ redirectTo: '/notfound' });
});