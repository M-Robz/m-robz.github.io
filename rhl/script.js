/* ------------- Open and close navigation menu items ------------- */

var menuItem = 0;

function menuOpen(menuID) {

	// close old sub-menu
	if (menuItem) menuItem.style.visibility = 'hidden';
	
	// show new sub-menu
	menuItem = document.getElementById(menuID);
	menuItem.style.visibility = 'visible';

}

function menuClose() {
	if (menuItem) menuItem.style.visibility = 'hidden';
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