angular.module("clase2", [])
    //("nombre",[dependencias])
angular.module("clase2").controller("home", function($scope) {
        $scope.titulo = "Hola Marce!";
        $scope.numeros = 1;
        $scope.sumarnumeros = function() {
            $scope.numeros = $scope.numeros + 1
        }
        $scope.listado = ["nombre", "apellido", "edad"];


    });
    //para llamar a un modulo. Si no pongo un segundo parámetro invoca.. si pongo [] lo crea.



angular.module("clase2").controller("buscador",function($scope,$http){
	$scope.test = "prueba";
	$scope.buscar = function(){
		var url ="https://api.mercadolibre.com/sites/MLA/search?q="+$scope.item;
		//console.log(url);
		$http.get(url).then(function(respuesta){
			//se agrega un .then y una función para guardar la respuesta una vez que la encuentra. La función no tiene nombre. Lo primero que hace es ejecutar el parametro 'respuesta'
			$scope.resultadosML = respuesta.data.results;
			// estoy guardando los resultados de mercado libre en la variable resultadoML 
			console.log(respuesta.data.results);
		});
	};

})


/* 
NOTAS
Siempre que escriba algo y no es una variable es un string
El módulo es la app
El controller es cómo interactuar con la pantalla
$scope es un objeto que es un conector a lo que sucede en la pantalla. Es un objeto.

*/