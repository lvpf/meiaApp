angular.module('category.route', ['category.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab.category', {
        url: '/category',
        views: {
          'tab-category': {
            templateUrl: 'areas/category/category.html',
            controller: 'CategoryCtrl'
          }
        }
      })

  });
