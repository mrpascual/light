(function() {
  "use strict";

  angular
    .module("app")
    .controller("MapController", MapController);

  MapController.$inject = ["$scope", "$interval", "refugeeService"];

  function MapController($scope, $interval, refugeeService) {
    var vm = this;

    vm.location = refugeeService.getLocation();

    console.log("vm.location", vm.location)

    $scope.getDirections = function () {
        vm.latitude = results[0].geometry.location.lat();
        vm.longitude = results[0].geometry.location.lng();
        // Apple Maps
        // window.location.href = "maps://maps.apple.com/?q="+latitude+","+longitude;

        // Google Maps
        window.location.href = "geo:0,0?q="+latitude+","+longitude;
    }



    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': vm.location.address + ', ' + vm.location.zip}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        vm.latitude = results[0].geometry.location.lat();
        vm.longitude = results[0].geometry.location.lng();
        $scope.map = {
          zoom: 15,
          center: {
            latitude: vm.latitude,
            longitude: vm.longitude
          },
          markers: [
          {
          id: 1,
          latitude: vm.latitude,
          longitude: vm.longitude
          }]
        };
        // var marker = new google.maps.Marker({
        //     map: map,
        //     position: results[0].geometry.location
        // });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });

  }

})();
