// 详细页面控制器
angular.module('details.controller', ['details.service'])
  .controller('DetailsCtrl', function($scope,GlobalVariable,$stateParams,$ionicHistory,IndexedDBJs) {

    // 购物车徽章位置显示的数量
    $scope.obj_cartCount = {
      count: "0"
    }



    // 当详细页面激活之前获取购物车表里面有没有商品数量，如果有，我们就把他给赋值
    $scope.$on('$ionicView.beforeEnter', function (e) {
      IndexedDBJs.getAll("cart",function(data){
        for(var i =0;i<data.length;i++){
          $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt(data[i].number);
        }
      },null)
    });


    // 通过后台获取到的商品详细信息数据
    $scope.obj_goodsInfo = {
      goodsId: "200067",
      description: "若昕 韩版睡衣女冬法兰绒家居服加厚珊瑚绒女人卡通甜美睡衣秋冬套装 66651K 女 M",
      prise: "66",
      picture: [],
      src: "",
      isFork: false,
      colorGroup: [{name: "白色", value: "white"}],
      sizeGroup: [{name: "s", value: "s"}, {name: "m", value: "m"}, {name: "l", value: "l"}]
    };

    // 用户选择信息
    $scope.obj_goodsDetailInfo = {
      goodsId: $scope.obj_goodsInfo.goodsId,
      isFork: $scope.obj_goodsInfo.isFork,
      description: $scope.obj_goodsInfo.description,
      src: $scope.obj_goodsInfo.src,
      prise: $scope.obj_goodsInfo.prise,
      color: "",
      size: "",
      number: 1
    }


    // 数量加1
    $scope.func_jia1 = function () {
      $scope.obj_goodsDetailInfo.number++;
    }

    // 数量减1
    $scope.func_jian1 = function () {
      if ($scope.obj_goodsDetailInfo.number != 1) {
        $scope.obj_goodsDetailInfo.number--;
      }
    }


    $scope.func_addToCart=function(){

      var obj_newData={};
      // 硬拷贝方法
      angular.copy($scope.obj_goodsDetailInfo,obj_newData);
      // 从新改变编号
      obj_newData.goodsId =obj_newData.goodsId + "-" + obj_newData.color + "-" + obj_newData.size;


      // 进行代码健壮性判断
      IndexedDBJs.get(obj_newData.goodsId,"cart",
        function(data){
          if(data==null||data==undefined){
            // 不存在商品就添加
            IndexedDBJs.add("cart", obj_newData, function () {
              // 变更购物车数量
              $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt($scope.obj_goodsDetailInfo.number);
              // 手动调用去更新数据绑定模型
              // 异步请求绑定到模型上的数据，不能被监听到，所以我们需要手动刷新一下
              //$scope.$apply()//在里面调用了$digest方法
              $scope.$digest();
            }, null);
          }
          else {
            // 存在商品
            // 是新增加6个数量，所以要处理一下，这个还影响下面变更购物车数量的逻辑
            obj_newData.number=parseInt(obj_newData.number)+parseInt(data.number);

            IndexedDBJs.update("cart", obj_newData, function () {
              //变更购物车数量
              $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt($scope.obj_goodsDetailInfo.number);
              $scope.$digest();
            }, null);
          }
        },
        null
      )

    }

    // 返回方法
    $scope.func_goBack=function(){
      $ionicHistory.goBack();
    }


  })
