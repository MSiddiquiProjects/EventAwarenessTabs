/**
 * Created by msiddiqui353 on 8/17/15.
 */
angular.module('starter.controllers')

    .controller('modalctrl', function($scope, $ionicModal){

        //TODO: locating the correct button.
        var searchbtn;

        $scope.whichTabSelected = function(tab){

            if(tab == 'home'){
                searchbtn = angular.element(document.querySelectorAll('#buttonId'));
                if(searchbtn != undefined)
                    searchbtn.removeClass('hide');

                $ionicModal.fromTemplateUrl('templates/Modals/myModal.html', {
                    scope: $scope
                }).then(function(modal) {
                    $scope.modal = modal;
                });
            }

            else if(tab == 'calendar'){

                if(searchbtn != undefined)
                    searchbtn.removeClass('hide');

                $ionicModal.fromTemplateUrl('templates/Modals/calendarModal.html', {
                    scope: $scope
                }).then(function(modal) {
                    $scope.modal = modal;
                });
            }

            else if(tab == 'settings'){
                searchbtn.addClass('hide');
            }

        }
    });