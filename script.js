function showLogos() {
	var logoDiv = document.getElementById('logo-box');
	if (logoDiv.style.visibility == 'hidden') {
		logoDiv.style.visibility = 'visible';
		logoDiv.className = 'hasWidth';
		document.addEventListener('click', logoClickOut);
	}
}

function hideLogos() {
	var logoDiv = document.getElementById('logo-box');
	if (logoDiv.style.visibility == 'visible') {
		document.removeEventListener('click', logoClickOut);
		logoDiv.className = '';
		setTimeout( function() {
			logoDiv.style.visibility = 'hidden';
		}, 500);
	}
}

function logoClickOut(event) {
	if (event.target.id != 'logo-box' && event.target.parentNode.id != 'logo-box' && event.target.parentNode.id != 'logos') {
		hideLogos();
	}
}