function writeHeadNav() {

document.write('<header>');
document.write('		<img src="images/blue_red_hat_100.gif" title="Bryce'+"'"+'s Bold Team">');
document.write('		<img src="images/orange_black_hat_100.gif" title="Conquistadors">');
document.write('		<img src="images/mrobz_v2_100.jpg" title="Mookies">');
document.write('			<a>Voting</a>');
document.write('			<a href="roto15.html">2015</a>');
document.write('	<div class="navItem">');
document.write('		<a>Salary Planner</a>');
document.write('	</div>');
document.write('			<a>2015</a>');
document.write('			<a>2016</a>');
document.write('			<a>2015</a>');
document.write('			<a>2015-16</a>');
document.write('	<div class="navItem">');
document.write('		<a href="javascript:toggleMenu('+"'"+'expansion'+"'"+')">Expansion</a>');
document.write('		<div class="subNav" id="expansion" style="visibility:hidden" onmouseleave="closeMenu('+"'"+'expansion'+"'"+')">');
document.write('			<span>Expansion</span>');
document.write('			<a>2015&nbsp;Draft&nbsp;Results</a>');
document.write('			<a>2015&nbsp;Protected&nbsp;Players</a>');
document.write('			<a>2015&nbsp;Expansion&nbsp;"Sandbox"</a>');
document.write('		</div>');
document.write('	</div>');

}