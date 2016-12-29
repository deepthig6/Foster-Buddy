angular.module('fosterApp')
        .controller('petSearchController', ['$scope', '$state', 'localStorageService', '$http', function ($scope, $state, localStorageService, $http) {
                $scope.noResults = false;
                $scope.init = function () {
                    $http.get("app/json/allResults.json").success(function (data) {
                        $scope.pets = data.results;
                    });
                };

                $scope.onCountyChange = function (county) {

                    var jsonUrl = "app/json/" + county.toLowerCase() + "Results.json";
                    $http.get(jsonUrl).success(function (data) {
                        $scope.pets = data.results;
                        $scope.noResults = false;

                    }).error(function () {
                        $scope.pets = '';
                        $scope.noResults = true;
                    }
                    );



                };

                $http.get('app/json/counties.json').success(function (data) {
                    $scope.counties = data.counties;
                });






                $scope.displayDetails = function (pet) {

                   //Add Blur when popup
                    var searchPage = document.getElementById("petSearch");
                    searchPage.className = "blurPage";

                    // Add style back to the popup after close
                    var dialog = document.getElementById("detailsPopUp");
                    dialog.style.display = "block";

                    $scope.pet = pet;

                    //Set cookie
                    localStorageService.set('petDetails', $scope.pet);
                    localStorageService.cookie.set('petDetails', $scope.pet);



                    $state.go('foster.details');



                };

        }]);