const firstDo 	= document.getElementById('firstDo');
const doSharp 	= document.getElementById('doSharp');
const re 		= document.getElementById('re');
const reSharp 	= document.getElementById('reSharp');
const mi 		= document.getElementById('mi');
const fa 		= document.getElementById('fa');
const faSharp 	= document.getElementById('faSharp');
const sol 		= document.getElementById('sol');
const solSharp 	= document.getElementById('solSharp');
const la 		= document.getElementById('la');
const laSharp 	= document.getElementById('laSharp');
const si 		= document.getElementById('si');
const secondDo 	= document.getElementById('secondDo');

function touchKey(keyPressed){
	let keyPressedString = String.fromCharCode(keyPressed.keyCode);
	const arrayKey = ['Q', 'Z', 'S','E','D','F','T','G','Y','H','U','J','K'];
	switch (keyPressedString){
		case 'Q':
			makeSong(firstDo);
			break;
		case 'Z':
			makeSong(doSharp);
			break;
		case 'S':
			makeSong(re);
			break;
		case 'E':
			makeSong(reSharp);
			break;
		case 'D':
			makeSong(mi);
			break;
		case 'F':
			makeSong(fa);
			break;
		case 'T':
			makeSong(faSharp);
			break;
		case 'G':
			makeSong(sol);
			break;
		case 'Y':
			makeSong(solSharp);
			break;
		case 'H':
			makeSong(la);
			break;
		case 'U':
			makeSong(laSharp);
			break;
		case 'J':
			makeSong(si);
			break;
		case 'K':
			makeSong(secondDo);
			break;
		default:
			console.log('you clicked on a bad key');
	};
};

function makeSong(getId){
		getId.style.transition 			= "all 0.2s ease-in-out";
		getId.style.backgroundColor 	= "red";

		const originalColor = function(){
			return (getId.id.includes('Sharp') ? 'black' : 'white');
		};
		
		setTimeout(()=>{getId.style.backgroundColor 	= originalColor()}, 100);
		const idName = getId.id;
		playNote(idName);
};

function playNote(noteName) {
	const pathName = '../Audio/'+noteName+'.mp3';
	const realPath 	= new Audio(pathName);
	realPath.play();
};

function recorder(){
	document.getElementsByClassName('stop')[0].style.opacity = '1';
	document.getElementsByClassName('stop')[0].disabled = false;
	document.getElementsByClassName('record')[0].style.border = 'solid red 2px';

//open the stream and get promise
	navigator.mediaDevices.getUserMedia({ audio: true })
  		.then(stream => {
	    const mediaRecorder = new MediaRecorder(stream);
	    mediaRecorder.start();

//when .stop, event dataavailable is fire and data goes into audioChunks
	    const audioChunks = [];
    	mediaRecorder.addEventListener("dataavailable", event => {
      	audioChunks.push(event.data);
    });

//now i got the data, i have to know how to use them
//i create Binary Large Object(Blob)
//when .stop, event stop is fired
	 mediaRecorder.addEventListener("stop", () => {
      const audioBlob = new Blob(audioChunks);
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
      document.getElementsByTagName("A")[0].setAttribute("href", audioUrl);
      document.getElementsByTagName("A")[0].setAttribute("download", 'audio.mp4');
      document.getElementsByTagName("A")[0].style.opacity = '1';
    });

	 document.getElementsByClassName('stop')[0].addEventListener("click",() => {
	 	if (mediaRecorder['state'] == 'recording') {
	 		mediaRecorder.stop();
	 	}
	 	else{
	 		console.log('state changed');
	 	}

    });
  });
};

function stopRecorder(){
	document.getElementsByClassName('stop')[0].style.opacity = '0.3';
	document.getElementsByClassName('stop')[0].disabled = true;
	document.getElementsByClassName('record')[0].style.border = '';
};

firstDo.addEventListener('click', ()=>{makeSong(firstDo)});
doSharp.addEventListener('click', ()=>{makeSong(doSharp)});
re.addEventListener('click',	  ()=>{makeSong(re)} );
reSharp.addEventListener('click', ()=>{makeSong(reSharp)});
mi.addEventListener('click',	  ()=>{makeSong(mi)} );
fa.addEventListener('click',	  ()=>{makeSong(fa)} );
faSharp.addEventListener('click', ()=>{makeSong(faSharp)});
sol.addEventListener('click',	  ()=>{makeSong(sol)} );
solSharp.addEventListener('click',()=>{makeSong(solSharp)});
la.addEventListener('click',	  ()=>{makeSong(la)} );
laSharp.addEventListener('click', ()=>{makeSong(laSharp)});
si.addEventListener('click',	  ()=>{makeSong(si)});
secondDo.addEventListener('click',()=>{makeSong(secondDo)});

document.addEventListener('keydown',(e)=>{touchKey(e)});