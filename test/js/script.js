var slider = Swipe(document.getElementById('slider'),
  {
    callback: function(pos) {
      
      var i = bullets.length;
      while (i--) {
        bullets[i].className = ' ';
      }
      bullets[pos].className = 'on';
    }
  });
  
var bullets = document.getElementById('position').getElementsByTagName('li');
  
var mslider = Swipe(document.getElementById('slider-mobile'),
  {
    callback: function(pos) {
    
      var i = mbullets.length;
      while (i--) {
        mbullets[i].className = ' ';
      }
      mbullets[pos].className = 'on';
    }
  });

var mbullets = document.getElementById('position-mobile').getElementsByTagName('li');

$(document).ready(function() { 
  $('.logo').delay(1000).fadeIn('slow');
});

$(window).load(function() {
  console.log("Window loaded");
});