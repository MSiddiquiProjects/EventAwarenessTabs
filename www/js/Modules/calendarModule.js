angular.module('starter')
    .config(function($stateProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
        .state('tab.calendar', {
          url: '/calendar',
          views: {
            'tab-calendar': {
              templateUrl: 'templates/TabPages/tab-calendar.html',
              controller: 'CalendarCtrl'
            }
          }
        });
    });
