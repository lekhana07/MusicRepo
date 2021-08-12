import { notesToPlayInOrder } from "./music-to-play";
import { BEATS_PER_MINUTE } from "./musical-score";

function playMusic() {
  const notes = notesToPlayInOrder;

  // TODO Play these notes one after the other at the pitch and rhythm given in each note
  console.log(notes);

  function playAllMusic(param: any, n: number) {
    if (notes[n].accidental) 
    {
      // Initialising pitch, octave, accidental
      let allTunes = notes[n].pitch+notes[n].octave+notes[n].accidental;
      console.log(allTunes);
      // play single musicalNotes
      let eachMusic = document.getElementById(allTunes) as HTMLAudioElement;
      eachMusic.play();

      // looping through all the avaliable musicalNotes
      setTimeout(() => {
        eachMusic.pause();
        if (notes[n + 1]) {
            playAllMusic(notes[n + 1], n + 1);
        }
      }, notes[n].beats * BEATS_PER_MINUTE);
      console.log(notes[n].beats);

    } 
    else
    {
      // Initialising pitch, octave
      let allTunes = notes[n].pitch + notes[n].octave;
      console.log(allTunes);
      // play single musicalNotes
      let eachMusic = document.getElementById(allTunes) as HTMLAudioElement;
      eachMusic.play();

      // looping through all the avaliable musicalNotes
      setTimeout(() => 
      {
        eachMusic.pause();
        if (notes[n + 1]) 
        {
            playAllMusic(notes[n + 1], n + 1);
        }
      },
       notes[n].beats * BEATS_PER_MINUTE);
      console.log(notes[n].beats);
    }
  }

  playAllMusic(notes[0], 0);
}
document.getElementById("start-playing")?.addEventListener("click", playMusic);
