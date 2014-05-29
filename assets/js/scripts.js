$(document).ready(function() {
	$('body').tubular({
		videoId: '6j73t2GjcC4',
		mute: true
	});
	
	$('.tubular-mute').click(function() {
	  $(this).toggleClass('active');
	});
	
    $('.btnmute').click(function() {
		$(this).removeClass('icon-mic-off');
		$(this).addClass('icon-mic');
		}, function() {
		$(this).addClass('icon-mic-off');
		$(this).removeClass('icon-mic');
	});      

});