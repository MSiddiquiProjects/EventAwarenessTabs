/**
 * Created by msiddiqui353 on 8/17/15.
 */
angular.module('starter.controllers')

    .controller('modalctrl', function($scope, $ionicModal, $document){

        //TODO: locating the correct button.
        //var searchbtn = angular.element($document);

        $scope.whichTabSelected = function(tab){

            if(tab == 'home'){
                $ionicModal.fromTemplateUrl('templates/Modals/myModal.html', {
                    scope: $scope
                }).then(function(modal) {
                    $scope.modal = modal;
                });
            }

            else if(tab == 'calendar'){
                $ionicModal.fromTemplateUrl('templates/Modals/calendarModal.html', {
                    scope: $scope
                }).then(function(modal) {
                    $scope.modal = modal;
                });
            }

            else if(tab == 'settings'){
                //searchbtn.addClass('hide');
                //console.log(searchbtn);
            }

        }
    });