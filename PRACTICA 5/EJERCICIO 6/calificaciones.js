function obtenerCalificacion(puntuacion) { 
    if (puntuacion >= 9 && puntuacion  <= 10) {
      return "Excelente"; 
    } else if (puntuacion >= 8 && puntuacion < 9) {
      return "Muy Bueno";
    } else if (puntuacion >= 7 && puntuacion < 8) {
      return "Bueno";
    } else if (puntuacion >= 6 && puntuacion < 7) { 
      return "Regular";
    } else if (puntuacion >= 1 && puntuacion < 6) { 
      return "Deficiente";
    } else {
      return "Puntuación no válida"; 
    }
}
    
console.log(obtenerCalificacion (8.5)); // Debería mostrar "Muy Bueno"   
console.log(obtenerCalificacion (4)); // Deberia mostrar "Deficiente"    
console.log(obtenerCalificacion (9.5)); // Deberia mostrar "Excelente"

    