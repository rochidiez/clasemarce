angular.module("basedatos",[]);
angular.module("basedatos").controller("blog",function($scope, $http){

	// var url = "https://cdn.contentful.com/spaces/f3pqce1rhitw/entries?access_token=57f58ed178b581f11721fd074ea6389819c9be228849651aefa469cc738094f7"
	// $http.get(url).then(function(respuesta){
	// 	console.log(respuesta);
	// 	$scope.items = respuesta.data.items;
	// });

var client = contentful.createClient({
  // ID of Space
  space: 'f3pqce1rhitw',

  // A valid access token within the Space
  accessToken: '57f58ed178b581f11721fd074ea6389819c9be228849651aefa469cc738094f7'

});


client.entry('4mluesNhni6yk8UyEkIuCc').then(function(res2){
	$scope.respuesta = res2;
	$scope.$digest();
	//eso es para que angular se fije si cambio el scope
	console.log($scope);
})

client.entries({content_type: '1IRv2C6nV6YMI0mEk6k6Yq'}).then(function(res3){
	$scope.respuesta3 = res3; 
	$scope.$digest();
	console.log(res3);
})



})




// var promesa = client.entry('4mluesNhni6yk8UyEkIuCc');
// promesa.then(function(res){
// 	console.log(res);
// // cuando es exitosa
// })


// promesa.catch(function(){
// //cuando vuelve con un error
// })

// promesa.finally(function(){
// //siempre vuelve acá
// })