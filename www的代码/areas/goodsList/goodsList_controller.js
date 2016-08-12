// 商品列表页面
angular.module('goodsList.controller', ['goodsList.service'])
  .controller('GoodsListCtrl', function ($scope,$stateParams,GoodsListFty,$ionicLoading,$ionicHistory) {

    // 初始化变量
    $scope.obj_goodsListData=[];
    $scope.pms_isMoreItemsAvailable=true;

    // 分页查询对象
    $scope.obj_pagingInfo = {
      amountMax: "",
      amountMin: "",
      billNum: "",
      createUser: "",
      dateFrom: "",
      dateTo: "",
      deptID: "",
      deptName: "",
      keyWord: "",
      loginName: "",
      billType: "",
      pageNum: 1,
      pageSize: 10,
      sortFlag: "0",
      sortType: "desc",
      typeNumber:""
    };


    // 视图事件
    $scope.$on('$ionicView.beforeEnter', function (e) {
      $scope.func_refreshGoodsList();
    });




    // 获取商品最新列表数据
    $scope.func_refreshGoodsList=function(){
      // 要传递的参数
      $scope.obj_pagingInfo.pageNum=1;
      var message=JSON.stringify($scope.obj_pagingInfo)

      console.log($scope.obj_pagingInfo);
      // 调用promise对象
      var promise=GoodsListFty.refreshGoodsList(message);
      promise.then(
        function(data){
          if(data){
            $scope.pms_isMoreItemsAvailable=true;
            $scope.obj_goodsListData=data;
          }else{
            $scope.pms_isMoreItemsAvailable=false;
          }
        },
        function(err){

        }).finally(function() {
          // 停止广播ion-refresher
          $scope.$broadcast('scroll.refreshComplete');
      });
    };


    // 加载更多数据的方法
    $scope.func_loadMoreGoodsList=function(){

      $ionicLoading.show({
        template: 'loading....'
      });

      // 要传递的参数
      $scope.obj_pagingInfo.pageNum++;
      var message=JSON.stringify($scope.obj_pagingInfo)
      console.log($scope.obj_pagingInfo);
      // 调用promise对象
      var promise=GoodsListFty.refreshGoodsList(message);
      promise.then(
        function(data){
          if(data){
            $scope.pms_isMoreItemsAvailable=true;
            $.each(data, function(i, item) {
              $scope.obj_goodsListData.push(item);
            });
          }else{
            $scope.pms_isMoreItemsAvailable=false;
          }
        },
        function(err){

        }).finally(function() {

          // 停止加载更多方法的广播
          $scope.$broadcast('scroll.infiniteScrollComplete');
          setTimeout(function(){
            $ionicLoading.hide();
          },1000)

      });
    }

    // 返回方法
    $scope.func_goBack=function(){
      $ionicHistory.goBack();
    }














  })
