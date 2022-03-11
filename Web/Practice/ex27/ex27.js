var list = document.querySelector('#todos-list');
var addBtn = document.querySelector('#todo-add-btn');
var addInput = document.querySelector('#todo-input');

function createTodo() {

  var text = addInput.Value;

  if(text === ""){
    return;
  }

  var li = document.createElement("li");

  var checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";

  var paragraph = document.createElement('p');
  paragraph.classList.add("paragraph");
  paragraph.textContent = text;

  var remove = document.createElement("span");
  remove.classList.add("remove");
  remove.innerHTML = "&cross;";

  li.appendChild(checkbox);
  li.appendChild(paragraph);
  li.appendChild(remove);
  list.appendChild(li);


  addInput.value = "";

}


addBtn.addEventListener("click", createTodo);

addInput.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    createTodo();
  }
});
