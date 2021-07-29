import * as Tone from "tone";
var masterStart = false

var crusher = new Tone.BitCrusher(4).toMaster();
var synth = new Tone.MonoSynth().connect(crusher);



function initialize() {
  masterStart = true;
}

function playNote(){
  if(masterStart){
    synth.triggerAttackRelease("C4", "8n")
  }
}

document.getElementById("startClock").addEventListener("click", initialize);
document.getElementById("playNote").addEventListener("click", playNote);
