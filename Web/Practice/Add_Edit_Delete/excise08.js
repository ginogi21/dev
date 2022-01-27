let inputText = document.querySelector("#txt"),
  items = document.querySelectorAll("#list li"),
  tab = [],
  index;

// get the selected li index using array
// populate array with li values
// ②두번째로 아래 문을 작성한다.
for (let i = 0; i < items.length; i++) {
  tab.push(items[i].innerHTML);
}

// get li index onclick
// ③세번째로 아래 구문을 작성한다.
for (let i = 0; i < items.length; i++) {

  items[i].onclick = function () {
    index = tab.indexOf(this.innerHTML);
    console.log(this.innerHTML + " INDEX = " + index);
    // set the selected li value into input text
    inputText.value = this.innerHTML;
  };

}
// ⑤다섯번째로 아래구문을 작성한다.
function refreshArray() {
  // clear array
  tab.length = 0;
  items = document.querySelectorAll("#list li"); // ⑨옆의 구문을 추가한다.
  // fill array
  for (let i = 0; i < items.length; i++) {
    tab.push(items[i].innerHTML);
  }
}

//① 먼저 function addLI()를 만든다.
function addLI() {

  let listNode = document.querySelector("#list"),
    textNode = document.createTextNode(inputText.value),
    liNode = document.createElement("LI");

  liNode.appendChild(textNode);
  listNode.appendChild(liNode);

  // ⑧아래 refreshArray()함수를 넣는다.
  refreshArray();

  // add event to the new LI
  // ⑦일곱번째 아래구문을 작성한다.
  liNode.onclick = function () {
    index = tab.indexOf(liNode.innerHTML);
    console.log(liNode.innerHTML + " INDEX = " + index);
    // set the selected li value into input text
    inputText.value = liNode.innerHTML;
  };

}

// ④네번째로 아래 구문을 작성한다.
function editLI() {
  // edit the selected li using input text
  items[index].innerHTML = inputText.value;
  refreshArray();
}

// ⑥여섯번째로 아래구문을 작성한다.
function deleteLI() {

  refreshArray(); //열번째로 옆구문을 추가하고,

  // 열한번째로 아래의 구문을 밑의 if 구문으로 변경한다. 
  // items[index].parentNode.removeChild(items[index]);
  // inputText.value = "";

  if (items.length >= 0) {
    items[index].parentNode.removeChild(items[index]);
    inputText.value = "";
  }
}