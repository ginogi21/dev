let currentMenu;
let menu = document.querySelector('.menu');

function clickHandler(e) {
  if (currentMenu){
    currentMenu.classList.remove('menu-active');
  }
  else{
    e.target.classList.add('menu-active');
    currentMenu = e.target;
  }
}

menu.addEventListener('click', clickHandler);