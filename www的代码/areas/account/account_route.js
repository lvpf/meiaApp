// 首页面
angular.module('account.route', ['account.controller'])

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'areas/account/account.html',
            controller: 'AccountCtrl'
          }
        }
      })

  });
