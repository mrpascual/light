(function() {
  "use strict";

  angular
    .module("app")
    .controller("RefugeesController", RefugeesController);

  RefugeesController.$inject = ["$http", "$log"];

  function RefugeesController($http, $log) {
    $log.info("Refugees Controller loaded!");
  }



})();
