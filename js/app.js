// Adding a Filter to the Portfolio page
jQuery(document).ready(function($) {
	// initialize Isotope after all images have loaded
	var $container = $('#portfolio-items').imagesLoaded( function() {
		$container.isotope({
			itemSelector: '.item',
			layoutMode: 'fitRows'
		});
	});

	// filter items on button click
	$('#filters').on( 'click', 'li', function() {
		var filterValue = $(this).attr('data-filter');
		$container.isotope({ filter: filterValue });
	});

	// change active class on buttons
	$('.filters').each( function( i, filters ) {
		var $filters = $( filters );
		$filters.on( 'click', 'li', function() {
			$filters.find('.active').removeClass('active');
			$( this ).addClass('active');
		});
	});
});