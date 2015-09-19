// 14 de septiembre

var lista = ['perro','gato','loro',4,{ nombre:'pepe', datosPersonales:{ apellido:'lopez' } }];


var persona = {
	nombre:'pepe',
	apellido:'lopez',
	edad:5
}

var i = 'nombre';

console.log('accedo a un atributo directamente',persona.nombre)
console.log('accedo a un atributo usando el nombre de un indice como un string',persona[i])

for(var indice in persona){
	console.log(indice)
	// lista[indice]
	// console.log(lista[indice])
}
