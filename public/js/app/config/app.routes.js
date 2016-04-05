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
        templateUrl: "/js/app/templates/welcome.html"
      })
      .state("about", {
        url: "/about",
        templateUrl: "/js/app/templates/about.html"
      })
      .state("map", {
        url: "/map",
        templateUrl: "/js/app/templates/map.html"
      })
      .state("list", {
        url: "/list",
        templateUrl: "/js/app/templates/refugee.list.html"
      })
      .state("info", {
        url: "/info",
        templateUrl: "/js/app/templates/refugee.info.html"
      })

    $urlRouterProvider.otherwise("/");
  }


})();
