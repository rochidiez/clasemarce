angular.module("app_search",[]);
angular.module("app_search").controller("buscador",function($scope, $http){
	$scope.search = function(){
		var url ="https://api.mercadolibre.com/sites/MLA/search?q="+$scope.item;
		$http.get(url).then(function(respuesta){
			$scope.resultados=respuesta.data.results;

		});

	};

	$scope.showDetails = function(item){
		$scope.ProductoSeleccionado = item;
		console.log($scope);
	}
	//$scope.lista = ["hola","como","te","va","marce"];

});


/*

var ejemplo = function(uno,dos,tres){
	//var uno = "pepe";
	console.log(uno,dos,tres);
	tres("hola");

}

ejemplo("pepe","dos",function(parametro){

	console.log(parametro);
});


*/
// primero creo una función y le declaro parametros. Cuando las ejecuta crea variables para cada uno de esos parametros. 