$(document).ready(function(){

	$('#button-3').click(function() {
		$(this).animate({
			marginLeft: '125px',
			fontSize: '24px',
			borderWidth: '10px'
		}, 200 );

	});

	$('#button-4').click(function() {
		$(this).toggleClass('gradient-background');
	});

	$('#button-5').click(function() {
		$(this).toggleClass('circle');
	});

  $('#button-24').click(function() {
		$(this).toggleClass('shape');
	});

	// check when the mouse moves
	$('#button-6').mousemove(function(e){

		// update mouse x and y position
		var xPos = e.pageX-125;
		var yPos = e.pageY-125;

		$(this).css({
			'position' : 'absolute',
			'top' :  yPos+'px',
			'left' :  xPos+'px',
		});
	});

  $('#button-7').click(function() {
		$(this).toggleClass('triangle');
  });

  $('#button-19').click(function(){
      alert("I am a button!");
});




});
