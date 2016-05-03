/* ------------- Open and close navigation menu items ------------- */

var lastMenu = 0;

function toggleMenu(menuID) {
	newMenu = document.getElementById(menuID);
	if (newMenu.style.visibility == 'hidden') {
		if (lastMenu) lastMenu.style.visibility = 'hidden';
		newMenu.style.visibility = 'visible';
		lastMenu = newMenu;
	} else {
		newMenu.style.visibility = 'hidden';
	}
}

function closeMenu(menuID) {
	document.getElementById(menuID).style.visibility = 'hidden';
}

/* ------------- Switch tabs ------------- */

function switchTab(tabID) {
	var divArray = document.getElementsByTagName('div');
	for (i=0; i<divArray.length; i++) {
		if (divArray[i].id == tabID) {
			
			// add class "visible" to selected tab
			divArray[i].className = divArray[i].className + ' visible';
			
		}
		else {
			
			// remove class "visible" from old tab
			posVisible = divArray[i].className.indexOf(' visible');
			if (posVisible > -1) {
				divArray[i].className = divArray[i].className.substring(0, posVisible);
			}
			
		}
	}
}