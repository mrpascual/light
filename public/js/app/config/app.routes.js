(function() {
  "use strict";

  angular
    .module("app")
    .config(appRoutes);

  appRoutes.$inject = ["$urlRouterProvider", "$stateProvider"];

  function appRoutes($urlRouterProvider, $stateProvider) {
    var scrollContent = function() {
    $('html, body').animate({ scrollTop: -10000 }, 100);
};

    $stateProvider
      .state("welcome", {
        url: "/",
        templateUrl: "/js/app/templates/welcome.html",
        onEnter: scrollContent
      })
      .state("about", {
        url: "/about",
        templateUrl: "/js/app/templates/about.html"
      })
      .state("map", {
        url: "/map",
        templateUrl: "/js/app/templates/map.html",
        controller: "MapController as vm",
        onEnter: scrollContent
      })
      .state("list", {
        url: "/list",
        templateUrl: "/js/app/templates/refugee.list.html",
        controller: "ListController",
        controllerAs: "vm",
        onEnter: scrollContent
      })
      .state("info", {
        url: "/info",
        templateUrl: "/js/app/templates/refugee.info.html",
        controller: "RefugeesController",
        controllerAs: "vm",
        onEnter: scrollContent
      })

    $urlRouterProvider.otherwise("/");
  }


})();
