const body = document.querySelector('body');
const bgColor = document.querySelector('#bgColor');
const option = document.querySelectorAll('option')

function changeColor(){
  let colorIndex = bgColor.value;
  body.style.backgroundColor = colorIndex;
}
