//Arreglo de canciones con información como titulo, ruta de archivos y portada
const songs = [
    { title: 'Luz', artist: 'Lil Supa', src: 'SONG/lil supa luz.mp3', cover: 'IMG/LUZ.jpg'},
    { title: 'Chop Suey', artist: 'System of a Down', src: 'SONG/chop suey.mp3', cover: 'IMG/chop suey.jpg'},
    { title: 'Ya se', artist: 'Daniel, Me estas matando', src: 'SONG/ya se.mp3', cover: 'IMG/ya se.jpg'},
];

// Indice de la canción actual en reproducción
let currentSongIndex = 0;

// Variable para rastrear si la música está reproduciendose o no
let isPlaying = false;

//Objeto que representa la instancia de reproducción de audio usando la biblioteca Howler.js
let audio;


// Funcion para cargar y reproducir la cancion actual
function playCurrentSong() {
    // Detén la reprodución si hay una instancia de audio previa
    if (audio) {
      audio.stop();
    }

    // Crea una nueva instancia de reproducción de audio con la canción actual
    audio = new Howl({
      src: [songs[currentSongIndex].src],
      autoplay: isPlaying, // Reproduce automaticamente si la musica está en reproducción 
      volume: volumeSlider.value, // Establece el volumen inicial
      onend: function() { 
        // Cuando la canción termina, reproduce la siguiente
        playNextSong();
      }
    });

    // Actualiza la información de la canción en la interfaz
    updateSongInfo();
  }


  // Elementos de la interfaz obtenidos por su ID
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const volumeSlider = document.getElementById('volume');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const albumCover = document.querySelector('.card-img-top');


// Evento para el botón de reproduccion
playButton.addEventListener('click', () => {
    isPlaying = true; //Se establece el estado de reproducción
    playCurrentSong(); // Llama a la función para reproducir la canción actual
});

// Evento para el botón de pausa
pauseButton.addEventListener('click', () => {
    isPlaying = false; // Se establece el estado de no reproducción
    audio.pause(); // Pausa la reproducción de audio
});

// Evento para el boton de siguiente canción 
nextButton.addEventListener('click', () => {
    playNextSong(); // Llama a  la función para reproducir la siguiente canción
})

// Evento para el botón de canción anterior
prevButton.addEventListener('click', () => {
    // Si la reproducción actual está más allá de los primeros  segundos, reinicia la canción
    if (audio.seek() > 5) {
        audio.seek(0);
    } else {
        // Si no, cambia a la canción anterior y la reproduce
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playCurrentSong();
    }
});

volumeSlider.addEventListener('input', () => {
    // Actualiza el volumen durante el deslizamiento
    audio.volume(volumeSlider.value);
});
  
  // Función para actualizar la información de la canción actual en la interfaz
function updateSongInfo() {
    songTitle.textContent = songs[currentSongIndex].title;
    songArtist.textContent = songs[currentSongIndex].artist;
    albumCover.src = songs[currentSongIndex].cover;
}

// Función para reproducir la siguiente canción
function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Cambia a la siguiente canción en el ciclo
    playCurrentSong(); // Llama a la función para reproducir a la nueva canción
}

// Reproduce la primera canción al cargar la página
playCurrentSong();

//finish