
$(document).ready(function(){
    // store code for your letters in variables

    // $( function() {
    //   $( ".draggable" ).draggable();
    // } );

	// Couldn't figure out a way to use the coordinates
	// that jQuery also stores, so let's record our own.
	var click = {
	    x: 0,
	    y: 0
	};

	$('.draggable').draggable({

	    start: function(event) {
	        click.x = event.clientX;
	        click.y = event.clientY;
	    },

	    drag: function(event, ui) {

	        // This is the parameter for scale()
	        var zoom = .25;

	        var original = ui.originalPosition;

	        // jQuery will simply use the same object we alter here
	        ui.position = {
	            left: (event.clientX - click.x + original.left) / zoom,
	            top:  (event.clientY - click.y + original.top ) / zoom
	        };

	    }

	});

    $('.draggable').click(function(){
      $(this).clone().prependTo(this).parent();
    });

});
