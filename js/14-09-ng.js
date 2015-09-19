var client = contentful.createClient({
  accessToken: '0d236cc56db7412848dcf967ae65acca414ccdb9d671ba8192a1e103dcc34a40',
  space: 'vx4jr78zdys0'
});

// escructura circular estalla el universo
var circular = {
	nombre:'pepe',
	apellido:'perez'
}
circular.edad = 27;
circular.inception = circular;
circular.inception.inception.inception.hola = "Hola!";


var objetoNormal = {
	nombre:'pepe',
	apellido:'perez'
}


angular.module('app',[]);
angular.module('app').controller('ejemplo',function($scope){

	client.entries({
        content_type: '2wKn6yEnZewu2SCCkus4as'
    }).then(function(contenido) {
        $scope.postejemplo = contenido;
        $scope.$digest();

        console.log(contenido);
    })



	var array = ["1", "2", "3", "4", "5"];
	$scope.lista = array;


	var nuevaLista = {nombre: "Rochi", Apellido: "Diez", Edad: 27};
	$scope.nuevaLista = nuevaLista;
})


