//var contentful = require('contentful-management');
var client = contentfulManagement.createClient({
    // A valid access token for your user (see above on how to create a valid access token)
    accessToken: '6e06ae59d6c1c6c8889d2aef7dab856dda1448ee83b16ee831f707ae6d5d26e8',
    secure: true
});

angular.module("plani", ['ui.router']);
angular.module("plani").controller("wendler", function($scope) {

});

var angmodule = angular.module("plani", ['ui.router'])

angmodule;
angular.module("plani").controller("wendler", function($scope, $http) {





});

angmodule.controller("publicar", function($scope, crearEntrada) {
    // console.log(crearEntrada);

    $scope.submit = function() {
        crearEntrada({
            week: $scope.week,
            date: $scope.date
        });
        //Ejecuta la funcion cuando hago clic en el boton
    }




});
angmodule.controller("listado", function($scope, obtenerEntradas) {
    obtenerEntradas('4RmsVwfznGqY6kymiSemis', function(pepo) {
        $scope.entradas = pepo;
        $scope.$digest();

    })
});
angmodule.factory("obtenerEntradas", function() {
        return function(contenttype, funcionDeRetorno) {
            // funcionDeRetorno();
            client.getSpace('3um2dooa0ihb').then(function(espacio) {
               espacio.getEntries({content_type: '4RmsVwfznGqY6kymiSemis'}).then(function(entries){
                  funcionDeRetorno(entries)
               })

            })

        }
})
    //creo un servicio para que el controller quede más simple
angmodule.factory("crearEntrada", function() {
    return function(data) {
        var promesa = client.getSpace('3um2dooa0ihb')
        var recibeEspacio = function(espacio) {
            // espacio.getContentType('4RmsVwfznGqY6kymiSemis').then(function(contentype){
            //    console.log(contentype);
            // });
            var promesa = espacio.createEntry('4RmsVwfznGqY6kymiSemis', {

                    fields: {
                        week: {
                            'en-US': data.week
                        },
                        warmUp: {
                            'en-US': data.date
                        }
                    }
                })
                // promesa.then(function(entrada) {
                //     console.log(entrada);
                // })

        }

        promesa.then(recibeEspacio);

    }
});

angmodule.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state("publicar", {
        url: "/publicar",
        templateUrl: "tarea3/publicar.html",
        controller: "publicar"
    });

    $stateProvider.state("listado", {
        url: "/listado",
        templateUrl: "tarea3/listado.html",
        controller: "listado"
    })

})