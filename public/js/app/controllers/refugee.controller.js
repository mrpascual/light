(function() {
  "use strict";

  angular
    .module("app")
    .controller("RefugeesController", RefugeesController);

  RefugeesController.$inject = ["$http", "$log", "$scope"];

  function RefugeesController($http, $log, $scope) {

    $scope.values = [
        {id: "1", name: "Male"},
        {id: "2", name: "Female"}
      ];
    $scope.selectedItem = $scope.values[0].id;



    var vm = this;
    vm.refugees = [];
    vm.getRefugee = getRefugee;
    vm.postRefugee = postRefugee;
    vm.newRefugee = {};

    // vm.getRefugee();
    vm.newRefugee = {
            firstName: "",
            lastName: "",
            middleName: "",
            dob: ""
            // gender: "",
            // nationality: "",
            // pictureUrl: ""
          }

    getRefugee();

     function getRefugee() {
      $http
        .get('http://localhost:3000/api/users', {
          headers: {'Content-Type': 'application/json'}
        })
        .then(function(response) {
          $log.debug(response)
          vm.refugees = response.data;
          // $log.info(vm.refugees);
          // $log.info("got one!");
        }, function(errRes) {
          console.error("Error!", errRes);
        });
    }

    function postRefugee() {
      $log.info("our refugee", vm.newRefugee)
      $http
        .post('http://localhost:3000/api/users', vm.newRefugee)
        .then(getRefugee())
        .then(function(response) {

          $log.info(response);
          $log.info("got one!");
        });
    }

    $log.info("refugee controller loaded...");

  }



})();
