var app = angular.module('rsocial', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    // remove o # da url
    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
        templateUrl: 'app/header/header.html',
        controller: 'headerController',
    })

        .when('/notfound', {
            templateUrl: 'app/notfound/notfound.html',
            controller: 'notfoundController',
        })

    // caso não seja nenhum desses, redirecione para a rota '/'
    .otherwise({ redirectTo: '/notfound' });
});