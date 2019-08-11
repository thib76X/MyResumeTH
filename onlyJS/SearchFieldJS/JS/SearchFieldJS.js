const userAction = async () => {
  const response = await fetch('https://swapi.co/api/people/');
  const myJson = await response.json();
  return myJson;
}

const tBodyElement  = document.getElementsByTagName('TBODY')[0];
const inputElement  = document.getElementsByClassName('searchField')[0];
const trElement	    = document.getElementsByTagName('TR');
const selectElement = document.getElementsByTagName('select')[0];

var myArray = [];

const myTable = () => userAction()
	.then((myResponse) => { 
		myArray.push(myResponse.results);
		return 'myResponse.results';
	});

(async function callMe() {
	await myTable();
	await (()=>{for (let i = 0; i < myArray[0].length; i++) {
		generateRow(myArray[0][i].name, myArray[0][i].height, myArray[0][i].hair_color)
		}})();
	sortBy('1');
})();

function generateRow(name, height, hairColor){
    tBodyElement.innerHTML+='<tr><td>'+name+'</td><td>'+height+'</td><td>'+hairColor+'</td></tr>';
}

function filterAll(){
	let inputValue = inputElement.value.toUpperCase();
	try{
		for (let j = 2; j <= trElement.length; j++) {
				if (!trElement[j].textContent.toUpperCase().includes(inputValue)) {
					trElement[j].style.display ="none";
				}
				else {
					trElement[j].style.display ="";
				}
		}
	}
	catch(e){
		return null;
	}
}

function sortBy(value){

		switch(value){

			case '1':
			forSort(value);
			break;

			case '2':
			forSort(value);
			break;

			case '3':
			forSort(value);
			break;

			default:
    		console.log();
		}
}

function forSort(transitValue){
	let myArray2 = [];
	let switching = true;
	let shouldSwitch;
	while(switching){
		switching = false;
		for (var p = 2; p <= trElement.length; p++) {
			shouldSwitch = false
			try{
				if (transitValue == 2) {
					if (parseInt(trElement[p].children[transitValue-1].textContent, 10) > parseInt(trElement[p+1].children[transitValue-1].textContent, 10)){
					shouldSwitch = true;
					break;
					}
				}
				else{
					if (trElement[p].children[transitValue-1].textContent.toUpperCase() > trElement[p+1].children[transitValue-1].textContent.toUpperCase()){
					shouldSwitch = true;
					break;
					}
				}	
				
			}
			catch(e){
				console.log();
			}
		}
		if (shouldSwitch) {
			trElement[p].parentNode.insertBefore(trElement[p+1], trElement[p]);
			switching = true;
		}
	}
}
