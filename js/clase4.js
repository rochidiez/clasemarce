var modulo = angular.module("router", ['ui.router']);

modulo.controller("link", function($scope) {
   // $scope.pepe = "hola pepe";
});
modulo.controller("listado", function($scope) {

})
modulo.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state("publicar", {
        url: "/publicar",
        templateUrl: "templates/publicar.html",
        controller: "link"
    });

    $stateProvider.state("listado", {
        url: "/listado",
        templateUrl: "templates/listado.html",
        controller: "listado"
    })

    // $stateProvider.state("valores", {
    //     url: "/valores",
    //     views: {
    //         contenido: {
    //             templateUrl: "templates/publicar.html",
    //             controller: "link"
    //         },
    //         valores: {
    //             templateUrl: "templates/listado.html",
    //             controller: "listado"
    //         }

    //     }
    // })




})