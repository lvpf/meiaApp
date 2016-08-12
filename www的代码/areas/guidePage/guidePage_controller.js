angular.module('guidePage.controller', ['guidePage.service'])

.controller('GuidePageCtrl', function($scope, $state,$ionicSlideBoxDelegate,$ionicPopup, $ionicModal, $ionicActionSheet){

 //引导页slide初始化
    var guideSlide = new Swiper('#guideSlide', {

      pagination: '.swiper-pagination',
  
      onSlideChangeEnd: function(swiper){
        var index = guideSlide.activeIndex+1;
        if(index==2||index==3){
          var item = $("#tips-"+index);
          if(item.hasClass("hidden")){
            item.removeClass("hidden");
            item.addClass("guide-show");
          }
        }
      }
    });
    //跳到首页
    $scope.func_goHome=function(){
      $state.go('tab.home');

    }











































//     // 一个提示对话框
//    $scope.showAlert = function() {
//      var alertPopup = $ionicPopup.alert({
//        title: 'Don\'t eat that!',
//        template: 'It might taste good'
//      });
//      alertPopup.then(function(res) {
//        console.log('Thank you for not eating my delicious ice cream cone');
//      });
//    };




//     // ActionSheet
//     // 点击按钮触发，或一些其他的触发条件
//  $scope.show = function() {

//    // 显示操作表
//    $ionicActionSheet.show({
//      buttons: [
//        { text: '<b>Share</b> This' },
//        { text: 'Move' },

//      ],
//      destructiveText: 'Delete',
//      titleText: 'Modify your album',
//      cancelText: 'Cancel',
//      buttonClicked: function(index) {
//      	console.log(index);
//        return true;
//      }
//    });

//  };


















//     //控制幻灯片切换
//     setInterval(function() {
//         $ionicSlideBoxDelegate.next();
//     }, 2000);

//     // 模态窗
//     $ionicModal.fromTemplateUrl('modal.html', {
//         scope: $scope,
//         animation: 'slide-in-up'
//     }).then(function(modal) {
//         $scope.modal = modal;
//     });
//     $scope.openModal = function() {
//         $scope.modal.show();
//     };
//     $scope.closeModal = function() {
//         $scope.modal.hide();
//     };
//     //当我们用到模型时，清除它！
//     $scope.$on('$destroy', function() {
//         $scope.modal.remove();
//     });
//     // 当隐藏的模型时执行动作
//     $scope.$on('modal.hide', function() {
//         // 执行动作
//     });
//     // 当移动模型时执行动作
//     $scope.$on('modal.removed', function() {
//         // 执行动作
//     });


});
