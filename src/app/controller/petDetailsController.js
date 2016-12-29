angular.module('fosterApp')
        .controller('petDetailsController', ['$scope', '$state', 'localStorageService', function ($scope, $state, localStorageService) {


                $scope.interested = function () {
                    $scope.sentMessage = "Your info has been sent to the rescue org and they will get in touch with you. Thank you for your interest!!"
                };
                // Get the <span> element that closes the popup
                var closeButton = document.getElementsByClassName("close")[0];

                // When the user clicks on (x), close the popup
                closeButton.onclick = function () {

                    $state.go('foster');
                    //Close popup
                    var dialog = document.getElementById("detailsPopUp");
                    dialog.style.display = "none";

                    // Remove Blur after clicking close
                    var searchPage = document.getElementById("petSearch");
                    searchPage.className = "";

                };

                $scope.validateEmail = function (email) {
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return re.test(email);
                }

                $scope.enableInterestButton = function () {
                    var interestButton = document.getElementById("interested");
                    interestButton.className = "interestButtonEnabled";
                    var enableInterested = false;

                    if (!($scope.email && $scope.phn))
                    {
                        enableInterested = true;

                        interestButton.className = "interestButtonDisabled";

                    }
                    return enableInterested;

                };

                $scope.getSessionData = function () {

                    //on popup reload maintain  the session data and blur
                    var searchPage = document.getElementById("petSearch");
                    searchPage.className = "blurPage";
                    $scope.petData = localStorageService.get('petDetails');

                };

            }]);
