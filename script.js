function showLogos() {
	var logoDiv = document.getElementById("logo-box");
	if (logoDiv.style.visibility == "hidden") {
		logoDiv.style.visibility = "visible";
		logoDiv.style.width = "660px";
		document.addEventListener('click', logoClickOut);
	}
}

function hideLogos() {
	var logoDiv = document.getElementById("logo-box");
	if (logoDiv.style.visibility == "visible") {
		logoDiv.style.width = "0";
		setTimeout( function() {
			logoDiv.style.visibility = "hidden";
		}, 500);
		document.removeEventListener('click', logoClickOut);
	}
}

function logoClickOut(event) {
	if (event.target.id != "logo-box" && event.target.parentNode.id != "logo-box" && event.target.parentNode.id != "logos") {
		hideLogos();
	}
}