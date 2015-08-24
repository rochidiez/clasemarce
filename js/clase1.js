var lista = [{
    nombre: "Marce",
    edad: 27
}, {
    nombre: "Santi",
    edad: 33
}, {
    nombre: "Rochi",
    edad: 27
}];
var suma = function(n, o) {
    var r = n + o;
    return r;
};
var res = suma(2, 3);
var res2 = suma(4, 2);


var divImaginario = document.createElement("div");
divImaginario.innerHTML = lista[0].nombre;
//Ese div tiene ese contenido

var contenedor = document.querySelector("div.ejemplo");
contenedor.appendChild(divImaginario);



//forEach: recorre el array y por cada uno ejecuta una función
var todo = function() {
    lista.forEach(function(a) {
        var divNuevo = document.createElement("div");
        divNuevo.innerHTML = a.nombre + " " + a.edad;

        contenedor.appendChild(divNuevo);

        console.log(divNuevo.innerHTML);
    });
}

//Escucha un evento y ejecuta una función según la acción que le diga, por ejemplo pasar el mouse por arriba
contenedor.addEventListener("mouseover", function() {
    console.log("hola");
})


document.querySelector(".button").addEventListener("click", function() {
	todo();
});