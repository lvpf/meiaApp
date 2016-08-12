angular.module('cart.route', ['cart.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('cart', {
        url: '/cart',
        templateUrl: 'areas/cart/cart.html',
        controller: 'CartCtrl'
      })
  });
