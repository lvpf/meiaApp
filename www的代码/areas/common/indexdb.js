
angular.module('indexedDB', [])
  .factory('IndexedDBJs', ['$ionicPopup',function ($ionicPopup) {

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
    window.IDBCursor=window.IDBCursor||window.webkitIDBCursor|| window.msIDBCursor;

    var db={
      dbName: 'aptdb',
      dbVersion: 2046, //用小数会四舍五入
      dbInstance: {},

      errorHandler: function (error) {
        console.log('error: ' + error.target.error.message);
      },

      // 打开数据库连接
      open: function (func,fail) {
        var dbContent = window.indexedDB.open(db.dbName, db.dbVersion);
        // 数据库打开请求的跟新回调函数
        dbContent.onupgradeneeded = db.upgrade;
        // 数据库打开请求的失败回调函数
        dbContent.onerror = db.errorHandler;
        // 数据库打开请求的成功回调函数
        dbContent.onsuccess = function (e) {
          db.dbInstance = dbContent.result;
          db.dbInstance.onerror = fail;
          func();
        };
      },
      // 数据库版本跟新操作
      upgrade: function (e) {
        var _db = e.target.result,names = _db.objectStoreNames;
        // 此处可以创建多个表
        var name = "cart";
        if (!names.contains(name)) {
          // 创建表
          _db.createObjectStore(
            name,
            {
              keyPath: 'goodsId',
              autoIncrement:false
            });
        }
      },
      // 获取表对象
      getObjectStore: function (objectStoreName,mode) {
        var txn, store;mode = mode || 'readonly';
        txn = db.dbInstance.transaction([objectStoreName], mode);
        store = txn.objectStore(objectStoreName);
        return store;
      },
      // 增加数据方法
      add: function (objectStoreName,data,success,fail) {
        db.open(function () {
          var store, req, mode = 'readwrite';
          store = db.getObjectStore(objectStoreName,mode),
            req = store.add(data);
            req.onsuccess = success;
            req.onerror=fail;
        },fail);
      },
      // 修改数据方法
      update: function (objectStoreName,data,success,fail) {
        db.open(function () {
          var store, req, mode = 'readwrite';
          store = db.getObjectStore(objectStoreName,mode),
            req = store.put(data);
          req.onsuccess = success;
          req.onerror=fail;
        },fail);
      },
      // 获取全部数据方法
      getAll: function (objectStoreName,success,fail) {
        db.open(function () {
          var
            store = db.getObjectStore(objectStoreName),
            cursor = store.openCursor(),
            data = [];

          cursor.onsuccess = function (e) {
            var result = e.target.result;
            if (result && result !== null) {
              data.push(result.value);
              result.continue();
            } else {
              success(data);
            }
          };
          cursor.onerror=fail;

        },fail);
      },
      // 获取单条数据方法
      get: function (id,objectStoreName,success,fail) {
        db.open(function () {
          var
            store = db.getObjectStore(objectStoreName),
            req = store.get(id);
            req.onsuccess = function (e){
            success(e.target.result);
          };
          req.onerror=fail;
        });
      },
      // delete是保留字
      // 删除数据方法
      'delete': function (id,objectStoreName,success,fail) {
        db.open(function () {
          var
            mode = 'readwrite',
            store, req;
          store = db.getObjectStore(objectStoreName,mode);
          req = store.delete(id);
          req.onsuccess = success;
          req.onerror=fail;
        });
      },
      // 删除表数据方法
      deleteAll: function (objectStoreName,success,fail) {
        db.open(function () {
          var mode, store, req;
          mode = 'readwrite';
          store = db.getObjectStore(objectStoreName,mode);
          req = store.clear();
          req.onsuccess = success;
          req.onerror=fail;
        });
      }
    };

    return db;
  }]);
