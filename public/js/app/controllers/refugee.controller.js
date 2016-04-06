(function() {
  "use strict";

  angular
    .module("app")
    .controller("RefugeesController", RefugeesController);

  RefugeesController.$inject = ["$http", "$log"];

  function RefugeesController($http, $log) {
    var vm = this;
    vm.all = [];
    vm.getRefugee = getRefugee;
    vm.postRefugee = postRefugee;
    vm.newRefugee = {};

    vm.getRefugee();

     function getRefugee() {
      $http
        .get('http://localhost:3000/api/users')
        .then(function(response) {
          vm.refugees = response.data;
          $log.info(vm.refugees);
          $log.info("got one!");
        }, function(errRes) {
          console.error("Error!", errRes);
        });
    }

    function postRefugee() {
      $http
        .post('http://localhost:3000/api/users', vm.newRefugee)
        .then(getRefugee)
        .then(function(response) {
          vm.newRefugee = {
            firstName: "",
            lastName: ""
            // middleName: "",
            // dob: "",
            // gender: "",
            // nationality: "",
            // pictureUrl: ""
          };
        });
    }
    $log.info(vm.newRefugee);
    $log.info("refugee controller loaded...");

  }



})();
