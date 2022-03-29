const addBtn = document.querySelector('#addbtn');
const div = document.querySelector('.contain');
const deleteBtn = document.querySelector('#deletebtn');


addBtn.addEventListener('click',addBox);

function addBox(){
  const newDiv = document.createElement('div');
  div.appendChild(newDiv).classList.add('show');  
}

/* const shows = document.querySelectorAll('.show'); */

deleteBtn.addEventListener('click',()=>{
  div.removeChild(div.lastChild);
});


