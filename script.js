function viewLogos() {
	var logoDiv = document.getElementById("logo-box");
	if(logoDiv.style.visibility == "visible") {
		logoDiv.style.width = "0";
		setTimeout( function() {
			logoDiv.style.visibility = "hidden";
		}, 1000);
	}
	else {
		logoDiv.style.visibility = "visible";
		logoDiv.style.width = "660px";
	}
}