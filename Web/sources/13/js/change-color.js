		var heading = document.querySelector('#heading');
		// heading.onclick = function() {
		// 	heading.style.color = "red";
		// }


		heading.addEventListener('click',()=>{
			heading.style.color= 'red';
			heading.style.fontSize = '4em';
		})

		let myName = prompt("여기에 이름을 입력하세요!");
		console.log(`${myName}님, 환영합니다.`);