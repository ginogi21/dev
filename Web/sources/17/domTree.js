let changeBtn = document.querySelector('#change');
let h1 = document.querySelector('h1');
let img = document.querySelector('img');
let p = document.querySelector('p');

let now = new Date();
let nowToday = now.toLocaleDateString();

changeBtn.addEventListener('click', ()=>{
  h1.classList.toggle('h1-active');
  img.classList.toggle('img-active');
  changeBtn.classList.toggle('btn-active');
  if(changeBtn === focus){
    p.innerText = "";
  }else{
    p.innerText = nowToday;
  };
});
