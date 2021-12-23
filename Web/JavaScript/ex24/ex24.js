const arr = document.querySelectorAll('li')
function addlist(){
  arr.forEach((e) =>
  e.classList.remove('active'));
  this.classList.add('active');
}

arr.forEach((e) =>
  e.addEventListener('click',addlist));