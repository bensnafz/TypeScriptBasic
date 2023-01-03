interface Player {
    currentSong: string;
    currentSongLength: number;
    playerNext: () => void;
    playPrevious: () => void;
}

const player: Player = {
    currentSong: "Hell to the KIng",
    currentSongLength: 34_000,
    playerNext: () => console.log("Playing next."),
    playPrevious: () => console.log("Playing previous.")
}

type song = {name: string; length: number };

class AudioPlayer implements Player {
    currentSong: string;
    currentSongLength: number;

    constructor(songInfo: song){
        this.currentSong = songInfo.name;
        this.currentSongLength = songInfo.length;
    }

    playerNext = () => console.log("Playing next.");
    playPrevious = () => console.log("Playing previous.");

    stopAudio = () => {

    }
}

const audioPlayer = new AudioPlayer({name: 'Shape of you', length: 40_000});
const anotherAudioPlayer = new AudioPlayer({name: "closer", length: 50_000});

console.log(audioPlayer.currentSong, audioPlayer.currentSongLength);
console.log(anotherAudioPlayer.currentSong, anotherAudioPlayer.currentSongLength);