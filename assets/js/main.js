
(function($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$main = $('#main'),
		$panels = $main.children('.panel'),
		$nav = $('#nav'), $nav_links = $nav.children('a');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '361px',   '736px'  ],
			xsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		$nav_links
			.on('click', function(event) {

				var href = $(this).attr('href');

				// Not a panel link? Bail.
					if (href.charAt(0) != '#'
					||	$panels.filter(href).length == 0)
						return;

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Change panels.
					if (window.location.hash != href)
						window.location.hash = href;

			});

	// Panels.

		// Initialize.
			(function() {

				var $panel, $link;

				// Get panel, link.
					if (window.location.hash) {

				 		$panel = $panels.filter(window.location.hash);
						$link = $nav_links.filter('[href="' + window.location.hash + '"]');

					}

				// No panel/link? Default to first.
					if (!$panel
					||	$panel.length == 0) {

						$panel = $panels.first();
						$link = $nav_links.first();

					}

				// Deactivate all panels except this one.
					$panels.not($panel)
						.addClass('inactive')
						.hide();

				// Activate link.
					$link
						.addClass('active');

				// Reset scroll.
					$window.scrollTop(0);

			})();

		// Hashchange event.
			$window.on('hashchange', function(event) {

				var $panel, $link;

				// Get panel, link.
					if (window.location.hash) {

				 		$panel = $panels.filter(window.location.hash);
						$link = $nav_links.filter('[href="' + window.location.hash + '"]');

						// No target panel? Bail.
							if ($panel.length == 0)
								return;

					}

				// No panel/link? Default to first.
					else {

						$panel = $panels.first();
						$link = $nav_links.first();

					}

				// Deactivate all panels.
					$panels.addClass('inactive');

				// Deactivate all links.
					$nav_links.removeClass('active');

				// Activate target link.
					$link.addClass('active');

				// Set max/min height.
					$main
						.css('max-height', $main.height() + 'px')
						.css('min-height', $main.height() + 'px');

				// Delay.
					setTimeout(function() {

						// Hide all panels.
							$panels.hide();

						// Show target panel.
							$panel.show();

						// Set new max/min height.
							$main
								.css('max-height', $panel.outerHeight() + 'px')
								.css('min-height', $panel.outerHeight() + 'px');

						// Reset scroll.
							$window.scrollTop(0);

						// Delay.
							window.setTimeout(function() {

								// Activate target panel.
									$panel.removeClass('inactive');

								// Clear max/min height.
									$main
										.css('max-height', '')
										.css('min-height', '');

								// IE: Refresh.
									$window.triggerHandler('--refresh');

								// Unlock.
									locked = false;

							}, (breakpoints.active('small') ? 0 : 500));

					}, 250);

			});

	// IE: Fixes.
		if (browser.name == 'ie') {

			// Fix min-height/flexbox.
				$window.on('--refresh', function() {

					$wrapper.css('height', 'auto');

					window.setTimeout(function() {

						var h = $wrapper.height(),
							wh = $window.height();

						if (h < wh)
							$wrapper.css('height', '100vh');

					}, 0);

				});

				$window.on('resize load', function() {
					$window.triggerHandler('--refresh');
				});

			// Fix intro pic.
				$('.panel.intro').each(function() {

					var $pic = $(this).children('.pic'),
						$img = $pic.children('img');

					$pic
						.css('background-image', 'url(' + $img.attr('src') + ')')
						.css('background-size', 'cover')
						.css('background-position', 'center');

					$img
						.css('visibility', 'hidden');

				});

		}

})(jQuery);


$(function(){
	$("#one").on("click",function(){
		alert("進入Lab1網頁");
	});
});

$(function(){
	$("#two").on("click",function(){
		alert("進入Lab2網頁");
	});
});

$(function(){
	$("#three").on("click",function(){
		alert("進入Lab3網頁");
	});
});

$(function(){
	$("#four").on("click",function(){
		alert("進入Lab4網頁");
	});
});


$(document).ready(function(){
    newImage1 = new Image(); //預載入圖片
    oldImage1 = $('#one').attr('src');
    newImage1.src = './images/RandomSelectImg2.jpg';
    $('#one').hover(function(){ //滑鼠滑過圖片切換
			$('#one').attr('src',newImage1.src);
    	},
		function(){
			$('#one').attr('src',oldImage1);
	});


});



$(document).ready(function(){
    newImage2 = new Image(); //預載入圖片
    oldImage2 = $('#two').attr('src');
    newImage2.src = './images/AutoClassImg2.jpg';
    $('#two').hover(function(){ //滑鼠滑過圖片切換
			$('#two').attr('src',newImage2.src);
    	},
		function(){
			$('#two').attr('src',oldImage2);
	});
});


$(document).ready(function(){
    newImage3 = new Image(); //預載入圖片
    oldImage3 = $('#three').attr('src');
    newImage3.src = './images/LoveTestImg2.jpg';
    $('#three').hover(function(){ //滑鼠滑過圖片切換
			$('#three').attr('src',newImage3.src);
    	},
		function(){
			$('#three').attr('src',oldImage3);
	});
});


$(document).ready(function(){
    newImage4 = new Image(); //預載入圖片
    oldImage4 = $('#four').attr('src');
    newImage4.src = './images/RPGImg2.jpg';
    $('#four').hover(function(){ //滑鼠滑過圖片切換
			$('#four').attr('src',newImage4.src);
    	},
		function(){
			$('#four').attr('src',oldImage4);
	});
});