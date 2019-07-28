var allLink		 = document.getElementsByTagName("A");

document.getElementById("1").style.opacity 	= "1";

function bringColor(name) {
	document.getElementById(name).style.transition 	= "all 0.5s ease-in-out";
	document.getElementById(name).style.opacity 	= "1";
	var  e = parseInt(name, 10);
	console.log(e);
	for (var i = parseInt(name, 10)-1; i != 0; i--) {
		try{
		document.getElementById(i).style.transition 			= "all 0.5s ease-in-out";
		document.getElementById(i).style.opacity 				= "1";
		document.getElementsByClassName(i)[0].style.transition 	= "all 0.5s ease-in-out";
		document.getElementsByClassName(i)[0].style.opacity 	= "1";
		}
		catch(err){
		console.log("the TRAIT doesn't exist");
		}
	}
	if (e != 4) {
		for(e; e < 4; e++) {
			try{
			document.getElementById(e+1).style.transition 			= "all 0.5s ease-in-out";
			document.getElementById(e+1).style.opacity 				= "0.5";
			document.getElementsByClassName(e)[0].style.transition 	= "all 0.5s ease-in-out";
			document.getElementsByClassName(e)[0].style.opacity 	= "0.5";
			}
			catch(err){
			console.log("the TRAIT doesn't exist");
			}
		}
	}	
}