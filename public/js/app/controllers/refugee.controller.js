(function() {
  "use strict";

  angular
    .module("app")
    .controller("RefugeesController", RefugeesController);

  RefugeesController.$inject = ["$http", "$log", "$scope", "$state"];

  function RefugeesController($http, $log, $scope, $state) {

    $scope.values = [
      {id: "1", name: "Male"},
      {id: "2", name: "Female"}
    ];
    $scope.selectedItem = $scope.values[0].id;

    var vm = this;
    // vm.getRefugee = getRefugee;
    vm.postRefugee = postRefugee;
    vm.newRefugee = {
            firstName: "",
            lastName: "",
            middleName: "",
            dob: "",
            gender: "",
            nationality: "",
            status: "",
            pictureUrl: "",
            locs: {}
          }


    function postRefugee() {
      $log.info("our refugee", vm.newRefugee)
      $http
        .post('/api/users', vm.newRefugee)
        .then(function(response) {
          $state.go('list');
        });
    }

    $log.info("refugee controller loaded...");

  }



})();
