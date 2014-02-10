var sliding=0;

var slider = Swipe(document.getElementById('slider'),
  {
    continuous: false,
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

$('.info').mousewheel(function(event) {
    if (sliding == 1) return;
    if (event.deltaX < -6) {
      sliding=1;
      slider.prev();
      setTimeout(function() {
        sliding = 0;
      },750);
    }
    else if (event.deltaX > 6) {
      sliding=1;
      slider.next();
      setTimeout(function() {
        sliding = 0;
      },750);
    }
});

document.onkeydown = function() {
    switch (window.event.keyCode) {
        case 37:
            slider.prev();
            break;
        case 39:
            slider.next();
            break;
    }
};

$(document).ready(function() {
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
  else if (subpage == "calculate")
  {
    slider.slide(2,400);
    mslider.slide(3,400);
  }
});

$(window).load(function() {
  console.log("Window loaded");
});

function next() {}
function prev() {}