const button = document.getElementById('push')
const div = document.getElementById('area')

button.addEventListener('click', function(){
  console.log('div생성중')
  const newDiv= document.createElement('div')
  newDiv.style.backgroundColor = "red";
  newDiv.style.width = '100px';
  newDiv.style.height = '100px';
  newDiv.style.border = '5px solid  white';
  div.appendChild(newDiv)
})