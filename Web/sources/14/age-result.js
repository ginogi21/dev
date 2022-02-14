
let newDiv = document.createElement("div");
let currentYear = 2021;
let birthYear = prompt('태어난 연도를 입력하세요. (YYYY)", "');
let age = currentYear - birthYear + 1;


newDiv.innerHTML = "currentYear + '년 현재<br>'";
