let header = document.querySelector('#main-header');
header.style.borderBottom = '4px solid red';

// let itemList = document.querySelector('#items');
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// 위와 아래가 같다.
let itemList = document.querySelector('#items');
itemList.parentElement.style.backgroundColor = '#f4f4f4';