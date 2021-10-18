(function(){
    var nav = document.querySelector('nav');
    var timeout = null;
    window.addEventListener('scroll', function(e){
      if(!timeout){
        timeout = setTimeout(function(){
          var curScroll = document.documentElement.scrollTop;
          if(curScroll > 121){
            nav.classList.add('fixed');
            previousScroll = curScroll;
          }else if(curScroll < 121){
            nav.classList.remove('fixed');
            previousScroll = curScroll;
          }
          clearTimeout(timeout);
          timeout = null;
        }, 0);
      }
    }); 
  }())

let hovermenu = document.getElementById('callmenu');
    hovermenu.onmouseover = over;
    hovermenu.onmouseout = hide;
var display = document.getElementById('menu1');

function over(){
    display.classList.add('show');
}

function hide(){
    display.classList.remove('show');
}

let hovermenu2 = document.getElementById('callmenu2');
    hovermenu2.onmouseover = over2;
    hovermenu2.onmouseout = hide2;
var display2 = document.getElementById('menu2');

function over2(){
    display2.classList.add('show');
}

function hide2(){
    display2.classList.remove('show');
}