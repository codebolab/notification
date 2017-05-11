(function() {

  "use strict";

  var app = angular.module("notification");

  app.factory('$notification', ['$timeout', function($timeout) {
    var data = {
      valueType: {
        "info": "Informacion",
        "success": "Exito",
        "warning": "Alerta",
        "error": "Error"
      }
    }
    function print(){
      console.log("data.positionHorizontal: " + data.positionHorizontal);
      console.log("data.positionVertical: " + data.positionVertical);
    }
    var cbShow = null;
    console.log("$notification - enter");
    function _getData(){
      console.log("GET DATA");
      return data;
    }
    function resetData(){
      data.positionHorizontal = "left";
      data.positionVertical = "bottom";
    }
    function setData(text, type, delay){
      resetData();
      data.message_text = text;
      data.delay = !!delay ? delay : 5000;
      data.type = type;
    }
    function _info(text, delay){
      console.log("INFO");
      setData(text, "info", delay);
      return this
    }
    function _success(text, delay){
      setData(text, "success", delay);
      return this
    }
    function _warning(text, delay){
      setData(text, "warning", delay);
      return this;
    }
    function _error(text, delay){
      setData(text, "error", delay);
      return this;
    }
    function _show(){
      $timeout(function(){
        print();
        cbShow();
      },10);
    }
    function _registerShowCallback(fn){
      cbShow = fn;
    }
    function _setPosition(horizontal, vertical){
      data.positionHorizontal = horizontal;
      if(!!vertical){
        data.positionVertical = vertical;
      }
      return this;
    }

    return {
      error: _error,
      getData: _getData,
      info: _info,
      registerShowCallback: _registerShowCallback,
      setPosition: _setPosition,
      show: _show,
      success: _success,
      warning: _warning
    };
  }]);

})();
