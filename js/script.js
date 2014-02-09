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

var args = window.location.search;
var subpage = args.substring(1);

$(document).ready(function() {
  $('header').blurjs({
    source: '.info',
    draggable: false,
    overlay: 'rgba(255,255,255,0.1)',
    radius: 20
  });

  $('footer').blurjs({
    source: '.info',
    draggable: false,
    overlay: 'rgba(255,255,255,0.1)',
    radius: 20
  });

  $('.logo').delay(1000).fadeIn('slow');
  
  if (subpage == "contacts")
  {
    slider.slide(1,400);
    mslider.slide(2,400);
  }
  else if (subpage == "about")
  {
    slider.slide(1,400);
    mslider.slide(1,400);
  }
});

$(window).load(function() {
  console.log("Window loaded");
});