$(document).ready(function(){
    // store code for your letters in variables

    $( function() {
      $( ".draggable" ).draggable();
    } );

    $('.draggable').click(function(){
      $(this).clone().prependTo(this).parent();
    });

});
