// JavaScript Document
console.log ('loaded');

function searchforvalue() {
	let search = document.getElementById('SearchTxt')
	var InputVal = search.value;
//	console.log(InputVal)
	
	var bodyTxt = document.body.innerText
//	console.log(bodyTxt)

	if (bodyTxt.includes(InputVal)) {
	    alert("The text entered is found in the webpage")}
	else {
		alert("The text entered is not found in the webpage")
	}
}