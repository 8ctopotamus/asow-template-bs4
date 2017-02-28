$(document).ready(function() {

	function createGalleryFromGreenRopeMediaLibrary() {
		var galImgs = $('#gallery-img-list').text();
		var galContainer = $('#gallery-container');
		var splitz = galImgs.split(', ');

		//go through imgList words
		for(var i = 0; i < splitz.length; i++) {
			var a = document.createElement('a');
			a.className += 'chocolat-image';
			a.href = 'http://app.greenrope.com/content/' + splitz[i] + '.jpg';
			a.title = splitz[i];
			a.innerHTML = '<img width="25%" height="200" src="http://app.greenrope.com/content/' + splitz[i] + '.jpg" alt="'+ splitz[i] +'" />';
			galContainer.append(a);
		}

		//chocolat
		$('#gallery-container').Chocolat();
	}
	createGalleryFromGreenRopeMediaLibrary()


    /*
      *
       * Slider animations SitePoint - http://codepen.io/SitePoint/pen/KwBWJd
       * http://www.sitepoint.com/bootstrap-carousel-with-css3-animations
      *
    */

	//Function to animate slider captions
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';

		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
				$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}

	//Variables on page load
	var $myCarousel = $('#carousel-example-generic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

	//Initialize carousel
	$myCarousel.carousel();

	//Animate captions in first slide on page load
	doAnimations($firstAnimatingElems);

	//Pause carousel
	$myCarousel.carousel('pause');


	//Other slides to be animated on carousel slide event
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});


	//nav settings
	var dropdownAnchor = $('.dropdown-toggle');
// media query event handler
if (matchMedia) {
	var mq = window.matchMedia("(min-width: 767px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}



/*
 * hover nav items to show dropdown links
   media query change
 */
function WidthChange(mq) {
	if (mq.matches) {
		//console.log('greater than 767');
		dropdownAnchor.attr("data-toggle", "");
	} else {
		//console.log('less than 767');
		dropdownAnchor.attr("data-toggle", "dropdown");
	}
}


});
