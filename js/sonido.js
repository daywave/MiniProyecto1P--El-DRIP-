let sound = true;

let MiAudio = document.getElementById("Audio-2");

function ChangeImgOn(){
	document.querySelector(".Musi-Off").src="../images/No_Music.svg";
}
MiAudio.addEventListener('ended', ChangeImgOn);

function Sonido(){
	if(sound){
		document.querySelector(".Musi-Off").src="../images/Si_Music.svg";
		MiAudio.src="../sounds/fondo.wav";	
		MiAudio.volume = 0.7;
		MiAudio.play();	
	}else{
        MiAudio.stop();
    }

}

