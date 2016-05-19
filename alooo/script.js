/* ------------- Open and close navigation menu items ------------- */

var lastMenu; // the most recently opened subNav menu

// open or close subNav menu when main navItem clicked
function toggleMenu(menuID) {
	newMenu = document.getElementById(menuID);
	
	// show newMenu if hidden
	if (newMenu.style.visibility == 'hidden') {
		
		// hide lastMenu if defined
		if (lastMenu) lastMenu.style.visibility = 'hidden';
		
		// make newMenu visible and assign it to lastMenu
		newMenu.style.visibility = 'visible';
		lastMenu = newMenu;
		
		// add listener for click on body
		document.body.addEventListener('click', menuClickOut);
		
	} else {
		
		// hide newMenu if visible
		newMenu.style.visibility = 'hidden';
		
		// remove listener
		document.body.removeEventListener('click', menuClickOut);
		
	}
}

// close subNav menu on mouse out
function closeMenu(menuID) {
	document.getElementById(menuID).style.visibility = 'hidden';
	document.body.removeEventListener('click', menuClickOut);
}

// close subNav menu if document clicked outside nav menu
function menuClickOut(event) {
	if (event.target.parentNode.className != "navItem" && event.target.className != "subNav") {
		lastMenu.style.visibility = 'hidden';
		document.body.removeEventListener('click', menuClickOut);
	}
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