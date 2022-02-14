// 박스만들기
let btnBox = document.querySelector('#btnBox');
let boxAdd = document.querySelector('.boxAdd');

btnBox.addEventListener('click',boxCreate);
function boxCreate(){
  let newDiv = document.createElement('div');
  newDiv.classList.add('box-shadow');
  boxAdd.appendChild(newDiv)
}

// 색상변경하기
let btnColor = document.querySelector('#btnColor');
let colorBox = document.querySelector('.colorBox');

let colors = ['#f48fb1','#90caf9','#81c784','#fff176','#ff8a65','#607d8b'];

btnColor.addEventListener('click',function(){
  let changeColor = parseInt(Math.random()*colors.length)
  colorBox.style.backgroundColor = colors[changeColor];
})