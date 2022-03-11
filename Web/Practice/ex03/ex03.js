const btn1 = document.querySelector('.one')
const btn2 = document.querySelector('.two')
const btn3 = document.querySelector('.three')

const handleClick = function(event){
  console.log(event.target)
}
btn2.addEventListener('click', handleClick)
btn3.addEventListener('click', handleClick)
btn1.addEventListener('click', handleClick)
