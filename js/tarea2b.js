angular.module("homework", []);
angular.module("homework").controller("guitars", function($scope, $http) {

    var url = "https://api.mercadolibre.com/sites/MLA/search?q=guitarras";
    $http.get(url).then(function(respuesta) {
        $scope.resultados = respuesta.data.results;

    });

    $scope.details = function(item){
		$scope.VerDetalle = item;
		console.log($scope);
	}


});

app.config(function($routeProvider){


      $routeProvider
          .when('/',{
                templateUrl: 'tarea2b_detail.html'
          });


});
