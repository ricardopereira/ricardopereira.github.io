var slider = Swipe(document.getElementById('slider'),
  {
/*
    callback: function(pos)
    {
      if (pos == 1)
        $('.contacts').hide();
      else
        $('.contacts').show();
    }
*/
  });
  
var mslider = Swipe(document.getElementById('slider-mobile'), { });

$(document).ready(function() { 
  $('#logo').delay(1000).fadeIn('slow');
});

$(window).load(function() {
  console.log("Window loaded");
});