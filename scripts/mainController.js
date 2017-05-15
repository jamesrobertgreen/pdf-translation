app.controller('mainController', function ($rootScope,$scope,$location) {
    $rootScope.lng = 'EN';
    
    $scope.selectLanguage = function (lang) {
        switch (lang) {
        case 'English':
            $rootScope.lng = 'EN';
            break;
        case 'Spanish':
            $rootScope.lng = 'ES';
            break;
        case 'Indonesian':
            $rootScope.lng = 'ID';
            break;
        default:
            $rootScope.lng = 'EN';
            break;
        }
        $location.path('/translation');
    };
});