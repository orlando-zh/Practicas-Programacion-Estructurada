function agregarEstudiante() {
    console.log("Botón clickeado"); // Agrega esta línea
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let carnet = document.getElementById("carnet").value;
    let carrera = document.getElementById("carrera").value;

    if (nombre && edad && carnet && carrera) {
        agregarEstudianteATabla(nombre, edad, carnet, carrera);
        document.getElementById("FormAsistencia").reset();
    } else {
        alert("Por favor, completa todos los campos del formulario");
    }
}

function agregarEstudianteATabla(nombre, edad, carnet, carrera) {
    let tableBody = document.getElementById("ListaAsistencia");
    let newRow = tableBody.insertRow(tableBody.rows.length);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = nombre;
    cell2.innerHTML = edad;
    cell3.innerHTML = carnet;
    cell4.innerHTML = carrera;
}
