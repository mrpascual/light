(function() {
  'use strict';

  angular.module('app')
    .factory('refugeeService', [function(){

      var location;

      return {
        setLocation: function(loc) {
          location = loc;
        },
        getLocation: function() {
          return location;
        }
      }
    }]);

})();
