// Loder
	$(window).on('load',function(){
		$('.page-loader').fadeOut();
	});
	

// Prevent console.log from generating errors in IE for the purposes of the demo
		if ( ! window.console ) console = { log: function(){} };

		// The actual plugin
		$('.single-page-nav').singlePageNav({
			offset: $('.single-page-nav').outerHeight(),
			filter: ':not(.external)',
			updateHash: true,
			beforeStart: function() {
				console.log('begin scrolling');
			},
			onComplete: function() {
				console.log('done scrolling');
			}
		});