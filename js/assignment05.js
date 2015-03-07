function MenuSelection() {
	if (document.getElementById("menu").value == "Please Select an Option") {
		document.getElementById("section01").style.visibility = "hidden";
		document.getElementById("section02").style.visibility = "hidden";	
	} else if (document.getElementById("menu").value == "1") {
		document.getElementById("section01").style.visibility = "visible";
		document.getElementById("section02").style.visibility = "hidden";		
	}
	else if(document.getElementById("menu").value == "2") {
		document.getElementById("section01").style.visibility = "hidden";
		document.getElementById("section02").style.visibility = "visible";	
	} else {
		document.getElementById("section01").style.visibility = "hidden";
		document.getElementById("section02").style.visibility = "hidden";	
	}

}