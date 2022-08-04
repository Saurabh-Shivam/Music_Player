const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        name: "ready",
        title: "Character Dheela",
        artist: "Salman Khan",
    },
    {
        name: "raone",
        title: "Chamak Challo",
        artist: "Akon",
    },
    {
        name: "tzh",
        title: "Swag Se Swagat",
        artist: "Atif Aslam",
    },
];

let isPlaying = false;

// for play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

// for pause function
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", () => {
    // isPlaying ? pauseMusic() : playMusic(); Using Ternary Statement
    if (isPlaying) { // true => pause function
        pauseMusic();
    } else {
        playMusic(); // false => play function
    }
});

// changing the music data
const loadSong = (songs) =>{
    title.textContent = songs.title
    artist.textContent = songs.artist
    // music.src = `music/${songs.name}.mp3`; also we can write like this
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
    
};
songIndex = 0;
// loadSong(songs[2]);
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length; // This will enable the next button to go to the first song again when we reach the end song
    // songIndex++;
    loadSong(songs[songIndex]);
    playMusic();
}
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length ; 
    loadSong(songs[songIndex]);
    playMusic();
}


next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);