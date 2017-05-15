var app = angular.module('pdfTranslation', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/menu.html'
        , controller: 'pdfTranslationController'
    }).when('/translation', {
        templateUrl: 'pages/translation.html'
    }).otherwise({
        redirectTo: '/'
    });
});