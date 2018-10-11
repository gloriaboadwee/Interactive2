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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("button-21").style.display = "block";
    } else {
        document.getElementById("button21").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




});
