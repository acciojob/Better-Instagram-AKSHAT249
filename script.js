//your code here
let data1;
let data2;
function dragstart(event){
	console.log("dragging started", event)
	data1 = event.target.id ;
	
}

function dragover(event){
	event.preventDefault();
	console.log("dragging over", event.target.id)
}


function drop(event){
	event.preventDefault();
	data2 = event.target.id;
	document.getElementById(data1).setAttribute("id","temp")
	document.getElementById("temp").innerHTML  = ""
	
	
	document.getElementById(data2).setAttribute("id",data1)
	document.getElementById(data1).innerHTML = ""
	document.getElementById(data1).innerHTML += `Image ${data1.slice(-1)}`
	

	document.getElementById("temp").setAttribute("id",data2)
	document.getElementById(data2).innerHTML = ""
	document.getElementById(data2).innerHTML += `Image ${data2.slice(-1)}`
	
}
