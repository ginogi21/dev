const addBtn = document.querySelector('#addbtn');
const div = document.querySelector('.contain');
const deleteBtn = document.querySelector('#deletebtn');
const shows = document.querySelectorAll('.show');
let arr = [];
let index;
console.log(shows.index);

addBtn.addEventListener('click',addBox);

function addBox(){
  const newDiv = document.createElement('div');
  div.appendChild(newDiv).classList.add('show');  
}

deleteBtn.addEventListener('click',deleteBox);

function deleteBox(){
  if(shows.length > 0){

  }
}
deleteBox()