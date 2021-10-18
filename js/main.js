(function(){
    var previousScroll = document.documentElement.scrollTop;
    var nav = document.querySelector('nav');
    var timeout = null;
    window.addEventListener('scroll', function(e){
      if(!timeout){
        timeout = setTimeout(function(){
          var curScroll = document.documentElement.scrollTop;
          if(curScroll > previousScroll){
            nav.classList.add('fixed');
            previousScroll = curScroll;
          }else if(curScroll < previousScroll){
            nav.classList.remove('fixed');
            previousScroll = curScroll;
          }
          clearTimeout(timeout);
          timeout = null;
        }, 100);
      }
    }); 
  }())
