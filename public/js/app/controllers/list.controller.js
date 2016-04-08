(function() {
  "use strict";

  angular
    .module("app")
    .controller("ListController", ListController);

  ListController.$inject = ["$http", "$log", "$scope", "$state", "refugeeService"];

  function ListController($http, $log, $scope, $state, refugeeService) {
    var vm = this;

    getRefugees();

    function getRefugees() {
      $http.get('/api/users')
        .then(function(response) {
          $log.debug(response)
          vm.refugees = response.data;
        }, function(errRes) {
          console.error("Error!", errRes);
        });
    }

    vm.mapLocation = function(loc) {
      refugeeService.setLocation(loc);
      $state.go('map');
    };

    $log.info("list controller loaded...");

  }

})();
