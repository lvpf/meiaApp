// home子路由

angular.module('home.route', ['home.controller'])
  .config(function($stateProvider,$urlRouterProvider) {

    $stateProvider
      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'areas/home/home.html',
            controller: 'HomeCtrl'
          }
        }
      })

  });
