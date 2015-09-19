angular.module("basedatos",[]);
angular.module("basedatos").controller("blog",function($scope, $http){

	var url = "https://cdn.contentful.com/spaces/vx4jr78zdys0/content_types?access_token=0d236cc56db7412848dcf967ae65acca414ccdb9d671ba8192a1e103dcc34a40"
	$http.get(url).then(function(respuesta){
		$scope.resultado = respuesta.data.items;
		console.log(respuesta);
	});

})
