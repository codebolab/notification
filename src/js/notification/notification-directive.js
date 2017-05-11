(function() {

  "use strict";

  var app = angular.module("notification");

  app.directive("notificationView", [
    function() {
      return {
        restrict: "E",
        templateUrl: "/static/components/notification/notification.tpl.html",
        controller: "notificationController"
      };
    }
  ]);

})();
