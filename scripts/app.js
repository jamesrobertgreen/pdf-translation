var app = angular.module('pdfTranslation', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/menu.html'
        , controller: 'mainController'
    }).when('/translation', {
        templateUrl: 'pages/translation.html'
        , controller: 'translationController'
    }).otherwise({
        redirectTo: '/'
    });
});