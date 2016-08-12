// tab的控制器
angular.module('tab.controller', [])
  .controller('TabCtrl', function($scope,IndexedDBJs) {


    // 绑定数据对象的值
    $scope.obj_cartCount={
      count:""
    }

    $scope.$on('$ionicView.beforeEnter', function (e) {
      IndexedDBJs.getAll("cart",function(data){
        if(data.length>0)
        {
          $scope.obj_cartCount.count="0";
          for(var i =0;i<data.length;i++){
            $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt(data[i].number);
            // 手动通知
            $scope.$digest();
          }
        }
      },null)
    });




  });
