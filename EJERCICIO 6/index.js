const cantidadElementos = parseInt(prompt("Ingresa cuántos elementos deseas agregar al arreglo:"));

// Crear un arreglo vacío
let arreglo = [];

// Utilizar un bucle para solicitar al usuario que ingrese cada elemento
for (let i = 0; i < cantidadElementos; i++) {
  const elemento = prompt(`Ingresa el elemento ${i + 1}:`);
  arreglo.push(elemento);
}

// Mostrar los elementos en consola
console.log("Elementos en el arreglo:", arreglo);
