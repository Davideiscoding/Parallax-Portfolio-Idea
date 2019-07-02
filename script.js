AOS.init({
  duration: 1500,
});


$(document).ready(function() {
  $(window).scroll(function () {

    if ($(window).scrollTop() > 200) {
      $('.navbar').addClass('addColor').removeClass("removeColor");
    }

    if ($(window).scrollTop() > 198 && $(window).scrollTop() < 199 || $(window).scrollTop() < 1) {
      $('.navbar').removeClass('addColor').addClass("removeColor");
    }

    if ($(window).scrollTop() < 2499) { /*If scroll is less than 2499 - show .rotate*/
    	$('.rotate').css('z-index', -2);
    	$('.black').css('z-index', -3);
    }

    if ($(window).scrollTop() > 2500) { /*If scroll is more than 2500 - show .black*/
    	$('.rotate').css('z-index', -3);
    	$('.black').css('z-index', -2);
    }
  });
});

$(document).ready(function () {
    // bind click event to all internal page anchors
    $('a[href*="#"]').on('click', function (e) {
        // prevent default action and bubbling
        e.preventDefault();
        e.stopPropagation();
        // set target to anchor's "href" attribute
        var target = $(this).attr('href');
        // scroll to each target
        $(target).velocity('scroll', {
            duration: 800,
            offset: -40,
            easing: 'ease-in-out'
        });
    });
});
