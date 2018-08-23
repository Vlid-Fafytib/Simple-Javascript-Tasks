// document.getElementById("nav").onmouseover = function(event){
//     var target = event.target;
//     if (target.className == 'menu-item'){
//         var s = target.getElementsByClassName('submenu');
//         closeMenu();
//         s[0].style.display = "block";
//     }
// }

// function closeMenu() {
    
//     var subm = document.getElementsByClassName('submenu');
//     for (var i=0; i<subm.length; i++) {
//         subm[i].style.display="none";
//     }
// }

// document.onmousemove = function (event) {
//     var target = event.target;
//     console.log(event.target);
//     if (target.className!='menu-item' && target.className!='submenu') {
//         closeMenu();
//     }
// }


var nav = document.getElementById('nav'); // создает элемент с айди nav
nav.addEventListener('click', function(e) { // добавляет обработчик по клику 
  var target = e.target; //находит таргет нажатия и присваивает новой переменной 

  var targetParent = target.closest('.menu-item'); //находит родителя и привсваивает новой переменной 

  if (targetParent) { // если родитель существует 
    var subm = targetParent.getElementsByClassName('submenu')[0];//присвоить новой переменной дочерние элементы меню
    close(); //Вызвать функцию закрытия списка
    if (subm) { //Если есть дочерние элементы
      subm.style.display = 'block'; //подсписок получает дисплей блок
    }
  }
});

function close() { //функция закрытия предидущего списка
  var s = document.getElementsByClassName('submenu'); //присвоить новой переменной элементы с классом
  for (var i = 0; i < s.length; i++) { 
    s[i].style.display = 'none'; // закрыть все менюшки т.е. присвоить им дисплей нон
  }
}
