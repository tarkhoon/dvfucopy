(function(){ // Функция для закрепления верхнего меню при прокрутке
    var nav = document.querySelector('nav'); //Получение строки нав
    let timeout = null; //Установление таймера
    window.addEventListener('scroll', function(e){ //Проверка на прокрутку
      if(!timeout){ //Закрепление меню, зацикливание
        timeout = setTimeout(function(){ //Тело цикла
          var curScroll = document.documentElement.scrollTop; //Получение информации о текущей прокрутке
          if(curScroll > 121){
            nav.classList.add('fixed'); //Закрепление
            previousScroll = curScroll;
          }else if(curScroll < 121){ 
            nav.classList.remove('fixed'); // Открепление
            previousScroll = curScroll;
          }
          clearTimeout(timeout); //Очистка таймера
          timeout = null;
        }, 0);
      }
    }); 
  }())
//Выпадающее меню 1
let hovermenu = document.getElementById('callmenu'); //Получение выпадающего меню 1
    hovermenu.onmouseover = over; //Вызов функции over при наведении
    hovermenu.onmouseout = hide; //Вызов функции hide при наведении
var display = document.getElementById('menu1'); //получение элемента menu1

function over(){
    display.classList.add('show'); //Добавление класса show к элементу (показывает меню)
}

function hide(){
    display.classList.remove('show');//Удаление класса show к элементу (скрывает меню)
}
//Выпадающее меню 2
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

(function(){ //Выравнивание высоты блока с меняющимися картинками под высоту картинок для адаптивности при уменьшении
    setInterval(function() { //Зацикливание
        var hpic = document.getElementById('img1').offsetHeight; //Получение высоты картинок
        document.getElementById('fadein').style.height = hpic + 'px'; //Выравнивание высоты блока под высоту картинок
      }, 0);
}())

              