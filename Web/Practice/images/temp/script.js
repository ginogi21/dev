let item = document.querySelector('.item');

item.addEventListener('click',(e)=>{
   console.log(e.target)
   e.target.style.backgroundColor = "lightgreen";
});


let button = document.querySelector('.btn');
let text = document.querySelector('#txt')

text.addEventListener('keyup',(e)=>{
   console.log(e.key)
})
