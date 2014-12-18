var timeout    = 500;
var closetimer = 0;
var ddmenuitem = 0;
var DCG = [];

function ddmenu_open() {
	ddmenu_canceltimer();
	ddmenu_close();
	ddmenuitem = $(this).find('ul').css('display', 'block');
}

function ddmenu_close() {
	if(ddmenuitem) ddmenuitem.css('display', 'none');
}

function ddmenu_timer() {
	closetimer = window.setTimeout(ddmenu_close, timeout);
}

function ddmenu_canceltimer() {
	if(closetimer) {
		window.clearTimeout(closetimer);
			closetimer = null;
}}

$(document).ready(function() {
	var openStr = location.search.substring(1);
	var pageName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
	
	$('#dcg_interiorNav > li').bind('mouseover', ddmenu_open);
	$('#dcg_interiorNav > li').bind('mouseout',  ddmenu_timer);

   var states =
      "CA,NV,AL,AK,AZ,AR,CO,CT,DE,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY";
   states = states.split(",");


	$('#dcg_slider').bxSlider({
		auto: true,
		pager: true,
		pause: 8000,
		speed: 800,
		controls: false,
		easing: 'easeInOutSine'
	});


	$(".stateLink").bind("click",function(event){
		event.preventDefault();
		var targetDiv = $(this).attr('href');
		$('.states').fadeOut(500);
		$('#stateContent').delay(500).show();
		$(targetDiv).delay(500).fadeIn(500);
   		var str = targetDiv.substring(1);
	});

	$('.stateClose').click(function() {
		$('#stateContent').fadeOut(250);
		var target = $(this).closest('div.states');
		target.fadeOut(500,function(){
			target.hide();
		});
	});	

	$('area').each(function() {
		$(this).qtip({
			content: $(this).attr('alt'), // Use the alt attribute of the area map
			style: {
				border: {
				   width: 1, 
				   radius: 0
				},
				background: '#9e808f',
				color: '#fff',
				textAlign: 'center',
				tip: false // Apply a tip at the default tooltip corner
			},
			position: {
			  corner: {
				 target: 'bottomMiddle',
				 tooltip: 'topMiddle'
			  }
			}
		});
	});
	
	//ACCORDION BUTTONS
	$('.faqLink').click(function() {

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('.faqLink').removeClass('on');

		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.faqContent').slideUp('normal');

		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {

			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('on');

			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		 }

	 });


   /* FAQ CATEGORIES */
	 $('.faq-list a').bind("click",function(event){
		event.preventDefault();
		$('.faq-list a').removeClass('active');
		$(this).addClass('active');
		var targetDiv = $(this).attr('href');
		$('.faq-section').slideUp('normal');
		$(targetDiv).slideDown('normal');
	 });

	 $('.faqContent').hide();
	 $('.faq-section').hide();
	 $('.faq-start').show();

	$('.dcg-control-hidden.dcg-open').each(function() {
		$(this).click(function(){
			$(this).next().slideDown();
			$(this).hide();
		});
	});
	$('.dcg-control-hidden.dcg-close').each(function() {
		$(this).click(function(){
			$(this).closest('.dcg-hidden-content').slideUp();
			$(this).closest('.dcg-hidden-content').prev().show();
		});
	});


	 /* TEAM BIOS */
	 $('.bio-list a').bind("click",function(event){
		event.preventDefault();
		$('.bio-list a').removeClass('active');
		$(this).addClass('active');
		var targetDiv = $(this).attr('href');
		$('.fullBio').slideUp('normal');
		$(targetDiv).slideDown('normal');
	 });

	 $('.fullBio').hide();
	 $('.bio-start').show();


	 /* INNOVATION PROFILES */
	 $('.profile-list a').bind("click",function(event){
		event.preventDefault();
		$('.profile-list a').removeClass('active');
		$(this).addClass('active');
		var targetDiv = $(this).attr('href');
		$('.fullProfile').slideUp('normal');
		$(targetDiv).slideDown('normal');
		$('.scrollContainer').slimScroll({ scrollTo: '0px' })
	 });

	 $('.fullProfile').hide();
	 $('.profile-start').show();
	 
	 // Scrollbar for innovation profiles
     if (pageName == 'innovation-profiles.html') {
		 $('.scrollContainer').slimScroll({
			height: '428px',
			allowPageScroll: true,
			wheelStep: '5'
		 });
     }
     
     
     /* FELLOWS BLOG */
	 $('#authorFilter').on('change', function(event) {
   		event.preventDefault();
		var val_authorFilter = $('#authorFilter').val();
		if (val_authorFilter === 'allAuthors') {
			$('.postLink').slideDown('slow');
		} else {
			$('.postLink').not('.' + val_authorFilter).slideUp('fast');
			$('.' + val_authorFilter).slideDown('slow');
		}
	 });
	 
	 
   // support hyperlinking to faq categories and team bios
   if ( openStr.indexOf( 'open=' ) != -1 ) {
      jQuery('html,body').scrollTop(600);
      openDiv = '#' + openStr.substring( openStr.indexOf('=')+1 );
      if ( pageName == 'faq.html' ) {
      	$('.faq-section').hide();
      	$('.faq-list a').removeClass('active');
      }
      else if ( pageName == 'about.html' ) {
      	$('.fullBio').hide();
      	$('.bio-list a').removeClass('active');
      }
      $(openDiv).show();
	  $('[href="' + openDiv + '"]').addClass('active');
   }

});

document.onclick = ddmenu_close;