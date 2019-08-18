const accessMySide 		  = document.getElementsByClassName('InsideMySide')[0];
const accessComputerSide  = document.getElementsByClassName('InsideComputerSide')[0];
const accessMyScore 	  = document.getElementsByClassName('MyScore')[0];
const accessComputerScore = document.getElementsByClassName('ComputerScore')[0];

const accesSnackBar = document.getElementsByClassName('SnackBar')[0];

const case1 = ["0","0"];
const case2 = ["0","1"];
const case3 = ["0","2"];

const case4 = ["1","0"];
const case5 = ["1","1"];
const case6 = ["1","2"];

const case7 = ["2","0"];
const case8 = ["2","1"];
const case9 = ["2","2"];

const properObject = { 
	success:{
		case3, 
		case4, 
		case8,
		},
	equality:{
		case1, 
		case5, 
		case9,
	},
	loose:{
		 case2, 
		 case6, 
		 case7
	}
};

let MyScore = 0;
let ComputerScore = 0;

function clickIcon(getButton) {
	const arrayChoice = ['rock1.png','paper1.jpg','scissor1.jpg'];
	let rand = Math.floor(Math.random() * arrayChoice.length);
	
	accessComputerSide.style.transition = "all ease-in-out 0.3s";
	accessComputerSide.style.background = "url('../Images/"+arrayChoice[rand]+"') no-repeat";
	accessComputerSide.id = rand;
	
	accessMySide.style.transition = "all ease-in-out 0.3s";
	accessMySide.style.background = "url('../Images/"+arrayChoice[getButton]+"') no-repeat";
	accessMySide.id = getButton;

	checkMatch();
}

function checkMatch() {
	let arrayComparator = [];
	let matchResult;
	arrayComparator.push(accessMySide.id, accessComputerSide.id);
	
	for (let property in properObject){
		for (let property1 in properObject[property]){
				if (compare(arrayComparator, properObject[property][property1])) {
					matchResult = property;
					break;
				}
		}
	}

	switch (matchResult){
		case 'success':
		console.log('yes');
		accessMyScore.innerHTML= ++MyScore;
		accesSnackBar.style.backgroundColor = 'lightgreen';
		accesSnackBar.innerHTML = 'YOU WIN';
		break;

		case 'equality':
		console.log('bof');
		accesSnackBar.style.backgroundColor = 'black';
		accesSnackBar.innerHTML = 'DRAW';
		break;

		case 'loose':
		console.log('no');
		accessComputerScore.innerHTML = ++ComputerScore;
		accesSnackBar.style.backgroundColor = 'red';
		accesSnackBar.innerHTML = 'YOU LOOSE';
		break;

		default:
		console.log('??');
	}
	accesSnackBar.style.transition = "visible ease-in-out 1s";
	accesSnackBar.className = "SnackBar show";
	setTimeout(()=>{
		accesSnackBar.className = "SnackBar"
	}, 500);

}

function compare(arr1,arr2){
  let result;
  if(arr1.length!=arr2.length){
  	result=false;
  } 
  else
  { 
   for(let i=0;i<arr1.length;i++) 
   if(arr1[i]!=arr2[i]) {
   	result=false;
   	break;
   }
   else {
   	result=true;
   }
  } 
  return result;
}