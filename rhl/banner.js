function writeBanner() {

/* Banner Container */
document.write('<div id="banContainer">');

/* Background Image */
document.write('<div id="banImg">');
document.write('	<img src="images/bombers100x100.png" style="left:49px;" title="31st Street Bombers" />');
document.write('	<img src="images/alex-the-gr8_100.jpg" style="left:146px;" title="Alexander the Gr8" />');
document.write('	<img src="images/blue_wings96x96.jpg" style="left:243px;" title="Durham Blue Wings" />');
document.write('	<img src="images/grn-blk_100.png" style="left:340px;" title="Five Foot Ninja" />');
document.write('	<img src="images/blk-red-str_100.png" style="left:609px;" title="Hit the Ice" />');
document.write('	<img src="images/commies_100.jpg" style="left:706px;" title="The Red Wing Commies" />');
document.write('	<img src="images/blue_100.png" style="left:803px;" title="Waxers" />');
document.write('	<img src="images/zambonis100x100.jpg" style="left:900px;" title="Zambonis" />');
document.write('</div>');
/* End Background Image */

/* Navigation Menu */
document.write('<div id="navMenuContainer">');
document.write('<ul id="navMenu">');
document.write('	<li style="width:90px;">');
document.write('		<a href="index.html">Home</a>');
document.write('	</li>');
document.write('	<li style="width:90px;" onmouseover="menuOpen('+"'history'"+')" onmouseout="menuClose()">');
document.write('		<a>History</a>');
document.write('		<div id="history">');
document.write('			<a>Standings</a>');
document.write('			<a>Awards</a>');
document.write('			<a>Franchise</a>');
document.write('			<a>Ownership</a>');
document.write('		</div>');
document.write('	</li>');
document.write('	<li style="width:90px;">');
document.write('		<a>Rules</a>');
document.write('	</li>');
document.write('	<li style="width:127px;" onmouseover="menuOpen('+"'roto'"+')" onmouseout="menuClose()">');
document.write('		<a href="roto13-14.html">Roto Standings</a>');
document.write('		<div id="roto">');
document.write('			<a href="roto13-14.html">2013-14</a>');
document.write('			<a>2012-13</a>');
document.write('			<a>2011-12</a>');
document.write('			<a>2010-11</a>');
document.write('			<a>2009-10</a>');
document.write('			<a>2008-09</a>');
document.write('		</div>');
document.write('	</li>');
document.write('	<li style="width:107px;" onmouseover="menuOpen('+"'board'"+')" onmouseout="menuClose()">');
document.write('		<a>Draft Board</a>');
document.write('		<div id="board">');
document.write('			<a>2014-15</a>');
document.write('			<a>2013-14</a>');
document.write('			<a>2012-13</a>');
document.write('			<a>2011-12</a>');
document.write('			<a>2010-11</a>');
document.write('			<a>2009-10</a>');
document.write('		</div>');
document.write('	</li>');
document.write('	<li style="width:90px;" onmouseover="menuOpen('+"'keepers'"+')" onmouseout="menuClose()">');
document.write('		<a>Keepers</a>');
document.write('		<div id="keepers">');
document.write('			<a>2014-15</a>');
document.write('			<a>2013-14</a>');
document.write('			<a>2012-13</a>');
document.write('			<a>2011-12</a>');
document.write('			<a>2010-11</a>');
document.write('			<a>2009-10</a>');
document.write('		</div>');
document.write('	</li>');
document.write('	<li style="width:112px;" onmouseover="menuOpen('+"'results'"+')" onmouseout="menuClose()">');
document.write('		<a>Draft Results</a>');
document.write('		<div id="results">');
document.write('			<a>2013-14</a>');
document.write('			<a>2012-13</a>');
document.write('			<a>2011-12</a>');
document.write('			<a>2010-11</a>');
document.write('			<a>2009-10</a>');
document.write('			<a>2008-09</a>');
document.write('		</div>');
document.write('	</li>');
document.write('	<li style="width:154px;" onmouseover="menuOpen('+"'rosters'"+')" onmouseout="menuClose()">');
document.write('		<a>Off-Season Rosters</a>');
document.write('		<div id="rosters">');
document.write('			<a>2014</a>');
document.write('			<a>2013</a>');
document.write('			<a>2012</a>');
document.write('			<a>2010</a>');
document.write('			<a>2009</a>');
document.write('		</div>');
document.write('	</li>');
document.write('	<li style="width:130px;" onmouseover="menuOpen('+"'utilities'"+')" onmouseout="menuClose()">');
document.write('		<a>Utilities</a>');
document.write('		<div id="utilities">');
document.write('			<a>Salary Retriever</a>');
document.write('			<a>Extension Penalty Demo</a>');
document.write('		</div>');
document.write('	</li>');
document.write('</ul>');
document.write('</div>');
/* End Navigation Menu */

document.write('</div>');
/* End Banner Container */

}