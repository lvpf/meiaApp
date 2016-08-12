// 总路由模块
angular.module('route', [
  'guidePage.route',
  'tab.route',
  'home.route',
  'category.route',
  'goodsList.route',
  'details.route',
  'cart.route',
  'account.route'
])
  .config(function($stateProvider, $urlRouterProvider) {

    // 第一次登陆
    if(localStorage["isFirst"])
    {
      $urlRouterProvider.otherwise('/tab/home');
    }
    else {
      $urlRouterProvider.otherwise('/guidePage');
    }

  });
