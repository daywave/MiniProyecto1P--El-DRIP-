let sound = true;

let MiAudio = document.getElementById("Audio-2");

function ChangeImgOn(){
   document.querySelector(".Musi-Off").src="../images/delfin.pngf";
}
MiAudio.addEventListener('ended', ChangeImgOn);

function Sonido(){
   if(sound){
      document.querySelector(".Musi-Off").src="../images/cangrejo.png";
      MiAudio.src="../sounds/fondo.wav";	
      MiAudio.volume = 0.9;
      MiAudio.play();	
   }

}