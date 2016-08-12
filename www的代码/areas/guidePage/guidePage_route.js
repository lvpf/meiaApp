//路由子模块
angular.module('guidePage.route', ['guidePage.controller'])

  
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('guidePage', {
    url: '/guidePage',
    templateUrl: 'areas/guidePage/guidePage.html',
    controller: 'GuidePageCtrl'
  })

});
