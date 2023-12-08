// Obtener elementos del DOM
const btnNew = document.getElementById("btn");
const appNote = document.getElementById("app");

// Cargar las notas existentes al cargar la página
getNotes().forEach((note) => {
  const noteNew = createNote(note.id, note.content);
  appNote.insertBefore(noteNew, btnNew);
});

// Crear un elemento de nota con eventos y funcionalidades asociadas
function createNote(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Crear una nota";
  element.value = content;

  // Evento de doble clic para eliminar la nota
  element.addEventListener("dblclick", () => {
    const warning = confirm("¿Quieres eliminar esta nota?");
    if (warning) {
      deleteNote(id, element);
    }
  });

  // Evento de entrada para actualizar el contenido de la nota
  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });

  return element;
}

// Eliminar una nota por su ID y el elemento del DOM asociado
function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id !== id);
  element.remove(); // Eliminar del DOM directamente
  saveNote(notes);
}

// Actualizar el contenido de una nota por su ID
function updateNote(id, content) {
  const notes = getNotes();
  const target = notes.find((note) => note.id === id);
  if (target) {
    target.content = content;
    saveNote(notes);
  }
}

// Obtener todas las notas almacenadas
function getNotes() {
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}

// Guardar las notas en el almacenamiento local
function saveNote(notes) {
    localStorage.setItem("note-app", JSON.stringify(notes));
}

// Agregar una nueva nota al hacer clic en el botón
function addNote() {
    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    };
    const noteNew = createNote(noteObj.id, noteObj.content);
    appNote.insertBefore(noteNew, btnNew);
    notes.push(noteObj);
    saveNote(notes);
}

// Evento de clic en el botón para agregar una nueva nota
btnNew.addEventListener("click", addNote);
