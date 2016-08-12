// 商品列表服务
angular.module('goodsList.service', [])
  .factory('GoodsListFty', function ($http, $q,GlobalVariable) {
    return {

      // 测试promise/A+规范内容
      test:function(){
        console.log(2);
        var deferred = $q.defer();
        setTimeout(function(){
          console.log(3);
          deferred.resolve('成功状态');
        },4000)
        console.log(4);
        return deferred.promise;
      },
      // 刷新商品列表
      refreshGoodsList: function (message) {
        var obj_goodsListData = [
          {
            name: 'MIUCO2016夏季新款女装翻领荷叶边袖立体玩偶宽松衬衫裙连衣裙',
            price: '198',
            haoping: '99',
            buy: '81',
            productId: "1",
            src: 'img/goodsList/goods1.jpg'
          },
          {
            name: 'MIUCO女装2016夏重工钉钻刺绣宽松花边摆上衣+A字半裙时尚套装',
            price: '288',
            haoping: '100',
            buy: '253',
            productId: "2",
            src: 'img/goodsList/goods2.jpg'
          },
          {
            name: 'MIUCO2016夏新女装镂空刺绣V领荷叶摆上衣+清新印花修身半裙套装',
            price: '269',
            haoping: '99',
            buy: '155',
            productId: "3",
            src: 'img/goodsList/goods3.jpg'
          },
          {
            name: 'MIUCO女装2016夏季新款镂空方格衬衫裙优雅气质A字收腰短袖连衣裙',
            price: '288',
            haoping: '100',
            buy: '733',
            productId: "4",
            src: 'img/goodsList/goods4.jpg'
          },
          {
            name: 'MIUCO2016欧美春夏新款女装条纹衬衫裙翻领气质系带中长款连衣裙',
            price: '289',
            haoping: '100',
            buy: '773',
            productId: "5",
            src: 'img/goodsList/goods5.jpg'
          },
          {
            name: 'MIUCO欧美夏季新款V领蝴蝶结荷叶边上衣+时尚复古格子裙裤套装女',
            price: '499',
            haoping: '100',
            buy: '6',
            productId: "6",
            src: 'img/goodsList/goods6.jpg'
          },
          {
            name: '古崇夏季新款女装修身显瘦时尚蕾丝公主裙短袖大摆粉色简欧连衣裙',
            price: '229',
            haoping: '99',
            buy: '215',
            productId: "7",
            src: 'img/goodsList/goods7.jpg'
          },
          {
            name: '古崇夏季新款女装时尚蕾丝大摆短袖连衣裙小香风蓝色小性感淑女裙',
            price: '1323',
            haoping: '69',
            buy: '19',
            productId: "8",
            src: 'img/goodsList/goods8.jpg'
          },
          {
            name: '古崇2016夏季新款女装短袖连衣裙欧美时尚修身淑女蕾丝拼接粉色裙',
            price: '368',
            haoping: '69',
            buy: '28',
            productId: "9",
            src: 'img/goodsList/goods9.jpg'
          }, {
            name: '古崇夏季新款女装时尚两件套套装修身显瘦淑女短袖蕾丝雪纺连衣裙',
            price: '229',
            haoping: '99',
            buy: '215',
            productId: "7",
            src: 'img/goodsList/goods10.jpg'
          },
          {
            name: '古崇2016夏季新款背心裙时尚V领大摆裙白色淑女修身显瘦连衣裙子',
            price: '1323',
            haoping: '69',
            buy: '19',
            productId: "8",
            src: 'img/goodsList/goods11.jpg'
          },
          {
            name: '古崇欧洲站2016夏季新波西米亚风沙滩长裙条纹露肩高腰淑女连衣裙',
            price: '368',
            haoping: '69',
            buy: '28',
            productId: "9",
            src: 'img/goodsList/goods12.jpg'
          }
        ];

        var deferred = $q.defer();
        deferred.resolve(obj_goodsListData);
        return deferred.promise;


        // 完整的请求服务器的步骤
        //var deferred = $q.defer();
        //var url=GlobalVariable.SERVER_PATH+'server?message='+message+"callback=JSON_CALLBACK";
        //$http.jsonp(url).success(function(data){
        //  deferred.resolve(data);
        //}).error(function(reason){
        //  deferred.reject(reason);
        //});
        //return deferred.promise;

      },
      //下拉加载更多列表商品列表
      loadMoreGoodsList: function (message) {
        var obj_goodsListData = [
           {
            name: 'MIUCO2016夏季新款女装翻领荷叶边袖立体玩偶宽松衬衫裙连衣裙',
            price: '198',
            haoping: '99',
            buy: '81',
            productId: "1",
            src: 'img/goodsList/goods1.jpg'
          },
          {
            name: 'MIUCO女装2016夏重工钉钻刺绣宽松花边摆上衣+A字半裙时尚套装',
            price: '288',
            haoping: '100',
            buy: '253',
            productId: "2",
            src: 'img/goodsList/goods2.jpg'
          },
          {
            name: 'MIUCO2016夏新女装镂空刺绣V领荷叶摆上衣+清新印花修身半裙套装',
            price: '269',
            haoping: '99',
            buy: '155',
            productId: "3",
            src: 'img/goodsList/goods3.jpg'
          },
          {
            name: 'MIUCO女装2016夏季新款镂空方格衬衫裙优雅气质A字收腰短袖连衣裙',
            price: '288',
            haoping: '100',
            buy: '733',
            productId: "4",
            src: 'img/goodsList/goods4.jpg'
          },
          {
            name: 'MIUCO2016欧美春夏新款女装条纹衬衫裙翻领气质系带中长款连衣裙',
            price: '289',
            haoping: '100',
            buy: '773',
            productId: "5",
            src: 'img/goodsList/goods5.jpg'
          },
          {
            name: 'MIUCO欧美夏季新款V领蝴蝶结荷叶边上衣+时尚复古格子裙裤套装女',
            price: '499',
            haoping: '100',
            buy: '6',
            productId: "6",
            src: 'img/goodsList/goods6.jpg'
          },
          {
            name: '古崇夏季新款女装修身显瘦时尚蕾丝公主裙短袖大摆粉色简欧连衣裙',
            price: '229',
            haoping: '99',
            buy: '215',
            productId: "7",
            src: 'img/goodsList/goods7.jpg'
          },
          {
            name: '古崇夏季新款女装时尚蕾丝大摆短袖连衣裙小香风蓝色小性感淑女裙',
            price: '1323',
            haoping: '69',
            buy: '19',
            productId: "8",
            src: 'img/goodsList/goods8.jpg'
          },
          {
            name: '古崇2016夏季新款女装短袖连衣裙欧美时尚修身淑女蕾丝拼接粉色裙',
            price: '368',
            haoping: '69',
            buy: '28',
            productId: "9",
            src: 'img/goodsList/goods9.jpg'
          }, {
            name: '古崇夏季新款女装时尚两件套套装修身显瘦淑女短袖蕾丝雪纺连衣裙',
            price: '229',
            haoping: '99',
            buy: '215',
            productId: "7",
            src: 'img/goodsList/goods10.jpg'
          },
          {
            name: '古崇2016夏季新款背心裙时尚V领大摆裙白色淑女修身显瘦连衣裙子',
            price: '1323',
            haoping: '69',
            buy: '19',
            productId: "8",
            src: 'img/goodsList/goods11.jpg'
          },
          {
            name: '古崇欧洲站2016夏季新波西米亚风沙滩长裙条纹露肩高腰淑女连衣裙',
            price: '368',
            haoping: '69',
            buy: '28',
            productId: "9",
            src: 'img/goodsList/goods12.jpg'
          }
        ];

        var deferred = $q.defer();
        deferred.resolve(obj_goodsListData);
        return deferred.promise;



        // 完整的请求服务器的步骤
        //var deferred = $q.defer();
        //var url=GlobalVariable.SERVER_PATH+'server?message='+message+"callback=JSON_CALLBACK";
        //$http.jsonp(url).success(function(data){
        //  deferred.resolve(data);
        //}).error(function(reason){
        //  deferred.reject(reason);
        //});
        //return deferred.promise;
      },
      getAllData: function () {

        // 创建一个延迟对象
        var deferred = $q.defer();

        console.log(deferred);


        setTimeout(function(){
          deferred.resolve('数据请求成功');
        },3000)

        //$http的get请求方式
        //$http.get('localhost:8080').success(function(data,status,headers,config){
        //    deferred.resolve(data);
        //}).error(function(data,status,headers,config){
        //    deferred.reject(data);
        //})

        // $http的post请求方式
        //$http.post('localhost:8080',{typeNumber:1}).success(function(data,status,headers,config){
        //
        //}).error(function(data,status,headers,config){
        //
        //})

        // 返回延迟对象
        return deferred.promise;

      },
      deleteById: function (message) {
        var deferred = $q.defer();

        var url = Global.SERVER_PATH+"/WXPlatformServlet?method=mobileUserUndoTaskList&message="+message+"&loginName="+$window.localStorage['loginName']+"&platform="+Global.PLATFORM+"&module=bill&callback=JSON_CALLBACK";
        $http.jsonp(url).success(function (data, status, headers, config) {
          deferred.resolve(data);
        }).error(function (data,status, headers, config) {
          deferred.reject(data);
        });
        return deferred.promise;
      }
    }
  });
