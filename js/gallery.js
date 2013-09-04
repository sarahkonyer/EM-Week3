jQuery(document).ready(function($) {
	// Stuff to do as soon as the DOM is ready;

	  $("#slides").slidesjs({
      width: 600,
      height: 600,
    callback: {
      loaded: function(number) {
        // Do something awesome!
        // Passes start slide number
      },
      start: function(number) {
        // Do something awesome!
        // Passes slide number at start of animation
      },
      complete: function(number) {
        // Do something awesome!
        // Passes slide number at end of animation
        $('.slidesjs-pagination-item a').html('<i class="icon-circle"></i>');
		    $('.slidesjs-pagination-item a.active').html('<i class="icon-circle"></i>');
      }
    }
  });
  $('.slidesjs-pagination').css({
  'width': ($('.slidesjs-pagination-item a').width() + 20) * $('.slidesjs-pagination-item a').length 
  });
	$('.slidesjs-pagination-item a').html('');
	$('.slidesjs-pagination-item a').html('<i class="icon-circle"></i>');
	$('.slidesjs-pagination-item a.active').html('<i class="icon-circle"></i>');

	$('.slidesjs-next').html('<i class="icon-chevron-sign-right"></i>')
	$('.slidesjs-previous').html('<i class="icon-chevron-sign-left"></i>')
});