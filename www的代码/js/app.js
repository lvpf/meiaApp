// 项目启动文件
angular.module('starter', ['ionic','route','global','config','ionicLazyLoad','indexedDB','commonJs','ngCordova'])
  .run(function($ionicPlatform,$location,$ionicHistory,$cordovaToast,$rootScope) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }



      //给android的物理返回按钮添加点击事件
      // 第一个参数是注册的事件，第二个参数是注册事件的优先级

      // 键盘弹出  500
      // 摸态窗口  400
      // actionsheet效果  300

      // 实现我们的双击退出功能  110
      // 返回前一个页面 100

      $ionicPlatform.registerBackButtonAction(function(e){
        if($rootScope.backButtonPressedOnceToExit){
          ionic.Platform.exitApp();
        }
        else {
          if($location.path()=="/tab/home"||$location.path()=="/tab/category"||$location.path()=="/tab/account"||$location.path()=="/tab/cart"){
            $rootScope.backButtonPressedOnceToExit=true;
            $cordovaToast.showShortBottom('再点一次退出！');
            setTimeout(function(){
              $rootScope.backButtonPressedOnceToExit=false;
            },2000)
          }
          else {
            $ionicHistory.goBack();
          }
        }
        e.preventDefault();
        return false
      },110);


    });
})

