let datos = ["Dato 1", "Dato 2", "Dato 3", "Dato 4", "Dato 5"];

// Mostrar el arreglo antes de la modificación
console.log("Arreglo antes de la modificación:", datos);

// Solicitar al usuario el nuevo valor para el tercer dato
const nuevoDato = prompt("Ingresa el nuevo valor para el tercer dato:");

// Modificar el tercer dato en la posición 2 con el valor ingresado y guardado en (nuevoDato)
datos[2] = nuevoDato;

// Mostrar el arreglo después de la modificación
console.log("Arreglo después de la modificación:", datos);
