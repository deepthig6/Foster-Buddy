var fosterApp = angular.module('fosterApp', ['ui.router', 'LocalStorageModule']);
fosterApp.controller('app', ['$scope', function ($scope) {

        $scope.init = function () {

            //Remove blur on reload
            var searchPage = document.getElementById("petSearch");
            if (searchPage !== null) {
                searchPage.className = "";
            }
        };

    }]).config(function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

    $urlRouterProvider.otherwise('/');
    localStorageServiceProvider
            .setPrefix('fosterApp')
            .setStorageType('sessionStorage')
            .setNotify(true, true)

    $stateProvider.state('foster', {
        url: '/foster',
        templateUrl: 'app/view/petSearch.html',
        controller: 'petSearchController'
    })
            .state('index', {
                url: '/index'
            })
            .state('foster.details', {
                url: '/petDetails',
                templateUrl: 'app/view/petDetails.html',
                controller: 'petDetailsController'
            })

            .state('advertise', {
                url: '/advertise',
                templateUrl: 'app/view/petAdvertise.html'
            })
            .state('aboutUs', {
                url: '/aboutUs',
                templateUrl: 'app/view/aboutUs.html'
            });


});


