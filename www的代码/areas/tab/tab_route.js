// tab子路由模块
angular.module('tab.route', ['tab.controller'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'areas/tab/tabs.html',
        controller: 'TabCtrl'
      })

  });
