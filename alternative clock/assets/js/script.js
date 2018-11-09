$(document).ready(function(){

    // add a zero to times below 10
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    // set up time getting function
    function getTime(){
        // get the date
    	  var d = new Date();

        // get hours, minutes, and seconds
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());

        // update the clock's text
        $('#clock').html(h + ":" + m );

        // rotate clock based on the minute
        // $('#clock').css('transform', 'rotate('+ s * 6 +'deg');

        // detect a specific time
        if(s == 05){
        	$('body').addClass('zero');
        } else {
        	$('body').removeClass('zero');
        }

        if(s == 10){
        	$('body').addClass('one');
        } else {
        	$('body').removeClass('one');
        }

      if(s == 15){
        $('body').addClass('two');
      } else {
        $('body').removeClass('two');
      }

    if(s == 20){
      $('body').addClass('three');
    } else {
      $('body').removeClass('three');
    }

    if(s == 25){
      $('body').addClass('four');
    } else {
      $('body').removeClass('four');
    }


    if(s == 30){
      $('body').addClass('five');
    } else {
      $('body').removeClass('five');
    }

    if(s == 35){
      $('body').addClass('six');
    } else {
      $('body').removeClass('six');
    }

    if(s == 40){
      $('body').addClass('seven');
    } else {
      $('body').removeClass('seven');
    }

    if(s == 45){
      $('body').addClass('eight');
    } else {
      $('body').removeClass('eight');
    }

        if(s == 50){
          $('body').addClass('nine');
        } else {
          $('body').removeClass('nine');
        }
        if(s == 55){
          $('body').addClass('ten');
        } else {
          $('body').removeClass('ten');
        }

  }


    // call getTime every 1 second
    setInterval(function() {
      getTime();
    }, 1000);


});
