(function() {
  "use strict";

  angular
    .module("app")
    .config(appRoutes);

  appRoutes.$inject = ["$urlRouterProvider", "$stateProvider"];

  function appRoutes($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state("welcome", {
        url: "/",
        templateUrl: "/js/app/layouts/welcome.html"
      })
      .state("about", {
        url: "/about",
        templateUrl: "/js/app/layouts/about.html"
      })
      .state("map", {
        url: "/map",
        templateUrl: "/js/app/layouts/map.html"
      })
      .state("list", {
        url: "/list",
        templateUrl: "/js/app/layouts/refugee.list.html"
      })

    $urlRouterProvider.otherwise("/");
  }


})();
