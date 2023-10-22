//Ejercicio 1 - utilizando el metodo filter() se muestra las marcas cuyo nombre inician con la letra F
const autos = ['Ferrari', 'Lamborgini', 'Mazda', 'Ford']
const autosF = autos.filter(function(auto){
    return auto[0] === 'F';
});
console.log(autosF);


//Ejercicio 2 - utilizando el metodo map(): se muestra el cuadrado de los números
let numeros = [1, 2, 3, 4, 5];
let cuadrados = numeros.map(function(numero) {
    return numero * numero;
});
console.log(cuadrados);


//Ejercicio 3 utilizando el motodo forEach()
let frutas = ['manzana', 'naranja', 'plátano', 'kiwi'];

frutas.forEach(function(fruta) {
    console.log(fruta);
});

