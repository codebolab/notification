(function() {

  'use strict';

  var app = angular.module("notification");

  app.controller('notificationController', [
    "$scope",
    "EventListener",
    "$timeout",
    "$notification",
    function($scope, EventListener, $timeout, $notification) {
      $scope.data = {};
      $scope.shouldShowMessage = false;
      $scope.cbDelay = null;
      $scope.hideMessage = function(){
        $scope.shouldShowMessage = false;
        if($scope.cbDelay){
          $timeout.cancel($scope.cbDelay);
        }
      }
      $scope.showMessage = function(){
        $scope.shouldShowMessage = true;
        $scope.cbDelay = $timeout($scope.hideMessage, $scope.data.delay);
      }
      function init(){
        $scope.data = $notification.getData();
        $notification.registerShowCallback($scope.showMessage);
      };
      init();
  }]);
})();
