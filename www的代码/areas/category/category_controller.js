angular.module('category.controller', ['category.service'])
    .controller('CategoryCtrl', function($scope, GlobalVariable, $ionicHistory) {

        $scope.$on('$ionicView.enter', function(e) {

            getCategoryData();
            $scope.getCategoryDetailData(102);
        });



        function getCategoryData() {

            $scope.categoryData = [{
                name: "潮流女装",
                typeNumber: '101'
            }, {
                name: "美啊仙裙",
                typeNumber: '102'
            }, {
                name: "裤子",
                typeNumber: '103'
            }, {
                name: "包包",
                typeNumber: '104'
            }, {
                name: "女鞋",
                typeNumber: '105'
            }, {
                name: "内衣",
                typeNumber: '106'
            }, {
                name: "裤子",
                typeNumber: '103'
            }, {
                name: "包包",
                typeNumber: '104'
            }, {
                name: "女鞋",
                typeNumber: '105'
            }, {
                name: "内衣",
                typeNumber: '106'
            }, {
                name: "裤子",
                typeNumber: '103'
            }, {
                name: "包包",
                typeNumber: '104'
            }, {
                name: "女鞋",
                typeNumber: '105'
            }, {
                name: "内衣",
                typeNumber: '106'
            }, {
                name: "裤子",
                typeNumber: '103'
            }, {
                name: "包包",
                typeNumber: '104'
            }, {
                name: "女鞋",
                typeNumber: '105'
            }, {
                name: "内衣",
                typeNumber: '106'
            }, ];

        };

        // 头部滚动条数据
        $scope.getCategoryDetailData = function(typeNumber) {

            if (typeNumber == 101) {
                $scope.categoryHeader = "img/category/banner_1.jpg";
                $scope.categoryDetailData = [{
                    name: "清新T恤",
                    src: "img/category/ns1.JPG",
                    typeNumber: '10001'
                }, {
                    name: "连衣裙",
                    src: "img/category/ns2.JPG",
                    typeNumber: '10002'
                }, {
                    name: "雪纺裙",
                    src: "img/category/ns3.JPG",
                    typeNumber: '10003'
                }, {
                    name: "衬衫",
                    src: "img/category/ns4.JPG",
                    typeNumber: '10004'
                }, {
                    name: "吊带",
                    src: "img/category/ns5.JPG",
                    typeNumber: '10005'
                }, {
                    name: "短裤",
                    src: "img/category/ns6.JPG",
                    typeNumber: '10006'
                }, {
                    name: "凉鞋",
                    src: "img/category/ns7.JPG",
                    typeNumber: '10007'
                }, {
                    name: "单鞋",
                    src: "img/category/ns8.JPG",
                    typeNumber: '10008'
                }, {
                    name: "帆布鞋",
                    src: "img/category/ns9.JPG",
                    typeNumber: '10009'
                }, {
                    name: "双肩包",
                    src: "img/category/ns10.JPG",
                    typeNumber: '10010'
                }, {
                    name: "手提包",
                    src: "img/category/ns11.JPG",
                    typeNumber: '10011'
                }, {
                    name: "个性包",
                    src: "img/category/ns12.JPG",
                    typeNumber: '10012'
                }];
            } else if (typeNumber == 102) {
                $scope.categoryHeader = "img/category/banner_2.jpg";
                $scope.categoryDetailData = [{
                    name: "热卖新品",
                    src: "img/category/nz1.webp",
                    typeNumber: '10001'
                }, {
                    name: "连衣裙",
                    src: "img/category/nz2.webp",
                    typeNumber: '10002'
                }, {
                    name: "减龄裙",
                    src: "img/category/nz3.webp",
                    typeNumber: '10003'
                }, {
                    name: "吊带裙",
                    src: "img/category/nz4.webp",
                    typeNumber: '10004'
                }, {
                    name: "气质裙",
                    src: "img/category/nz5.webp",
                    typeNumber: '10005'
                }, {
                    name: "衬衫裙",
                    src: "img/category/nz6.webp",
                    typeNumber: '10006'
                }, {
                    name: "娃娃裙",
                    src: "img/category/nz7.webp",
                    typeNumber: '10007'
                }, {
                    name: "背心裙",
                    src: "img/category/nz8.webp",
                    typeNumber: '10008'
                }, {
                    name: "雪纺裙",
                    src: "img/category/nz9.webp",
                    typeNumber: '10009'
                }, {
                    name: "半身裙",
                    src: "img/category/nz10.webp",
                    typeNumber: '10010'
                }, {
                    name: "裤裙套装",
                    src: "img/category/nz11.webp",
                    typeNumber: '10011'
                }, {
                    name: "小黑裙",
                    src: "img/category/nz12.webp",
                    typeNumber: '10012'
                }];
            } else if (typeNumber == 103) {
                $scope.categoryHeader = "img/category/banner_3.jpg";
                $scope.categoryDetailData = [{
                    name: "热卖",
                    src: "img/category/nt1.JPG",
                    typeNumber: '10013'
                }, {
                    name: "小脚裤",
                    src: "img/category/nt2.JPG",
                    typeNumber: '10014'
                }, {
                    name: "显瘦裤裙",
                    src: "img/category/nt3.JPG",
                    typeNumber: '10015'
                }, {
                    name: "牛仔裤",
                    src: "img/category/nt4.JPG",
                    typeNumber: '10016'
                }, {
                    name: "背带裤",
                    src: "img/category/nt5.JPG",
                    typeNumber: '10017'
                }, {
                    name: "休闲裤",
                    src: "img/category/nt6.JPG",
                    typeNumber: '10018'
                }, {
                    name: "西装裤",
                    src: "img/category/nt7.JPG",
                    typeNumber: '10019'
                }, {
                    name: "运动裤",
                    src: "img/category/nt8.JPG",
                    typeNumber: '10020'
                }, {
                    name: "短裤",
                    src: "img/category/nt9.JPG",
                    typeNumber: '10021'
                }];
            } else if (typeNumber == 104) {
                $scope.categoryHeader = "img/category/banner_4.jpg";
                $scope.categoryDetailData = [{
                    name: "实用大包",
                    src: "img/category/nb1.JPG",
                    typeNumber: '10013'
                }, {
                    name: "钱袋宝",
                    src: "img/category/nb2.JPG",
                    typeNumber: '10014'
                }, {
                    name: "迷你包",
                    src: "img/category/nb3.JPG",
                    typeNumber: '10015'
                }, {
                    name: "双肩包",
                    src: "img/category/nb4.JPG",
                    typeNumber: '10016'
                }, {
                    name: "双肩包",
                    src: "img/category/nb5.JPG",
                    typeNumber: '10017'
                }, {
                    name: "手提包",
                    src: "img/category/nb6.JPG",
                    typeNumber: '10018'
                }, {
                    name: "单肩包",
                    src: "img/category/nb7.JPG",
                    typeNumber: '10019'
                }, {
                    name: "钱包",
                    src: "img/category/nb8.JPG",
                    typeNumber: '10020'
                }, {
                    name: "个性包",
                    src: "img/category/nb9.JPG",
                    typeNumber: '10021'
                }, {
                    name: "小圆包",
                    src: "img/category/nb10.JPG",
                    typeNumber: '10019'
                }, {
                    name: "菱格包",
                    src: "img/category/nb11.JPG",
                    typeNumber: '10020'
                }, {
                    name: "旅行箱",
                    src: "img/category/nb12.JPG",
                    typeNumber: '10021'
                }];
            } else {
                $scope.categoryHeader = "img/category/banner_6.jpg";
                $scope.categoryDetailData = [{
                    name: "夹克",
                    src: "img/category/nt1.JPG",
                    typeNumber: '10013'
                }, {
                    name: "衬衫",
                    src: "img/category/nt2.JPG",
                    typeNumber: '10014'
                }, {
                    name: "牛仔裤",
                    src: "img/category/nt3.JPG",
                    typeNumber: '10015'
                }, {
                    name: "羽绒服",
                    src: "img/category/nt4.JPG",
                    typeNumber: '10016'
                }, {
                    name: "T恤",
                    src: "img/category/nt5.JPG",
                    typeNumber: '10017'
                }, {
                    name: "休闲裤",
                    src: "img/category/nt6.JPG",
                    typeNumber: '10018'
                }, {
                    name: "卫衣",
                    src: "img/category/nt7.JPG",
                    typeNumber: '10019'
                }, {
                    name: "针织衫",
                    src: "img/category/nt8.JPG",
                    typeNumber: '10020'
                }, {
                    name: "棉服",
                    src: "img/category/nt9.JPG",
                    typeNumber: '10021'
                }];
            }
        }




        // 左侧分类单击样式修改
        $scope.categoryLeftClick = function(e) {
            e.target.className = 'nav-current';
            $(e.target).siblings().removeClass().addClass('nav-blur');
        };
    });
