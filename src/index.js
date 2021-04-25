import * as Tone from 'tone'

//create a synth and connect it to the main output (your speakers)

const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "8n");

// var playing = false;

const now = Tone.now()

// var playedNote = event.clientX;

//play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "8n");

// document.addEventListener("click", function(a) {
//   playing = !playing;
// });
//
// if(playing) {
//   synth.triggerAttack(playedNote, now); //play a note on click that corresponds with the x position of the mouse
// } else {
//   synth.triggerRelease(now); //release the played note
// }

document.onmousedown = function(a){
  synth.triggerAttack(a.x, now) //play a note on click that corresponds with the x position of the mouse
};

document.onmouseup = function(a){
  synth.triggerRelease(now) //release the played note
};
