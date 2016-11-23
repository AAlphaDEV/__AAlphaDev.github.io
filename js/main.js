$(function() {
	//jQuery page scrolling using jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.to-modal1').data('modal', '#modal1');
    $('#modal1').hide();

    $('.modal-link').on('click', function(event) {
        var modal = $(this).data('modal');
        $(modal).fadeToggle();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

//Closes the Responsive menu on item click (little screen)
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
