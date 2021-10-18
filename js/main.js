(function(){
    var header = document.querySelector('header');
    var nav = document.querySelector('nav');
    var timeout = null;
    window.addEventListener('scroll', function(e){
      if(!timeout){
        timeout = setTimeout(function(){
          var curScroll = document.documentElement.scrollTop;
          if(curScroll > 121){
            nav.classList.add('fixed');
            //header.classList.remove('margin0');
            //header.classList.add('margin40');
            previousScroll = curScroll;
          }else if(curScroll < 121){
            nav.classList.remove('fixed');
            //header.classList.remove('margin40');
            //header.classList.add('margin0');
            previousScroll = curScroll;
          }
          clearTimeout(timeout);
          timeout = null;
        }, 0);
      }
    }); 
  }())
