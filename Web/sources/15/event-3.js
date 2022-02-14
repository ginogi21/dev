let colorBtn = document.querySelector('#change');
let pragrap = document.querySelector('p');

let colors = ["red", "yellow", "green", "purple", "dodgerblue", "pink"];

colorBtn.addEventListener('click', ()=>{
  let colorIndex = parseInt(Math.random()*colors.length);
  pragrap.style.color = colors[colorIndex];
  colorBtn.style.color = colors[colorIndex];
});

/* function colorChange(){
  let colorIndex = parseInt(Math.random()*colors.length);
  pragrap.style.color = colors[colorIndex];
  colorBtn.style.color = colors[colorIndex];
} */