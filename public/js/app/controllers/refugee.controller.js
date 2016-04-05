(function() {
  "use strict";

  angular
    .module("app")
    .controller("RefugeesController", RefugeesController);

  RefugeesController.$inject = ["$http", "$log"];

  function RefugeesController($http, $log) {
    var vm = this;
    vm.all = [];
    // vm.addRefugee = addRefugee;
    vm.newRefugee = {};

    // function getRefugee() {
      $http
        .get('http://localhost:3000/api/users')
        .then(function(response) {
          vm.refugees = response.data;
          $log.info(vm.refugees);
        }, function(errRes) {
          console.error("Error!", errRes);
        });
    // }
  }



})();
