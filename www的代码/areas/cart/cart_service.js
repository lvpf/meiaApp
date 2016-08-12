angular.module('cart.service', [])
  .factory('CartFty', ['$http', '$q','$window','IndexedDBJs', function ($http, $q,$window,IndexedDBJs) {
    return {
      getAllData: function () {
        var deferred = $q.defer();
        IndexedDBJs.getAll("cart",function(data){
          deferred.resolve(data);
        },function(e){
          deferred.reject(e);
        })
        return deferred.promise;
      },
      get: function (id) {
        var deferred = $q.defer();
        IndexedDBJs.get(id,"cart",function(data){
          deferred.resolve(data);
        },function(e){
          deferred.reject(e);
        })
        return deferred.promise;
      },
      updateData: function (data) {
        var deferred = $q.defer();
        IndexedDBJs.update("cart",data,function(){
          deferred.resolve();
        },function(e){
          deferred.reject(e);
        })
        return deferred.promise;
      },
      delete: function (id) {
        var deferred = $q.defer();
        IndexedDBJs.delete(id,"cart",function(data){
          deferred.resolve(data);
        },function(e){
          deferred.reject(e);
        })
        return deferred.promise;
      }
    }
  }]);
