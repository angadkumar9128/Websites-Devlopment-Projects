const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const seekBar = document.getElementById('seekBar');
const volumeBar = document.getElementById('volumeBar');
const fileInput = document.getElementById('fileInput');
const playlistItems = document.getElementById('playlistItems');
const albumCover = document.getElementById('albumCover');
const songTitle = document.getElementById('songTitle');
const artistAlbum = document.getElementById('artistAlbum');

let audio = new Audio();
let playlist = [];
let currentIndex = 0;
let isPlaying = false;

// Function to add files to the playlist
function addToPlaylist(file) {
    playlist.push(file);
    const listItem = document.createElement('li');
    listItem.textContent = file.name;
    listItem.addEventListener('click', () => {
        currentIndex = playlist.indexOf(file);
        loadAudio(file);
    });
    playlistItems.appendChild(listItem);
}

// Function to load audio file
function loadAudio(file) {
    const objectURL = URL.createObjectURL(file);
    audio.src = objectURL;
    audio.load();
    updateMetadata(file);
}

// Function to update song metadata
function updateMetadata(file) {
    const songInfo = file.name.split('.');
    songTitle.textContent = songInfo[0];
    artistAlbum.textContent = "Kumar_Angad"; // Set default artist and album
    albumCover.src = 'af7056d7890bd4a5cb9a883f159ae321.gif'; // Set default album cover (replace with your own cover image)
}

// Event listeners for buttons
playBtn.addEventListener('click', () => {
    if (audio.src && !isPlaying) {
        audio.play();
        isPlaying = true;
    }
});

pauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    }
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadAudio(playlist[currentIndex]);
    if (isPlaying) audio.play();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % playlist.length;
    loadAudio(playlist[currentIndex]);
    if (isPlaying) audio.play();
});

// Event listener for the seek bar
seekBar.addEventListener('input', () => {
    audio.currentTime = seekBar.value;
});

// Event listener for volume bar
volumeBar.addEventListener('input', () => {
    audio.volume = volumeBar.value;
});

// Event listener for file input
fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    addToPlaylist(file);
    if (playlist.length === 1) {
        currentIndex = 0;
        loadAudio(file);
    }
});

// Update the seek bar as the song plays
audio.addEventListener('timeupdate', () => {
    seekBar.value = audio.currentTime;
});

// Update the play/pause buttons when the song ends
audio.addEventListener('ended', () => {
    isPlaying = false;
});

// Clear the file input when a new file is chosen
audio.addEventListener('abort', () => {
    fileInput.value = null;
});
