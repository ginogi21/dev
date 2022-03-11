/* let id = prompt("아이디를 입력하세요!")

if( id == "jinok"){
  let password = prompt("비밀번호를 입력하세요")
  if(password == 12345){
    alert("로그인 되었습니다. "+id+"님 반갑습니다.!")
  }
  else {
    alert("비밀번호가 잘못 되엇습니다.!")
  }
}
else{
  alert("아이디가 잘 못 되었습니다.")
}
 */
// 위 코드를 and(&&)연산자를 이용해 아래와 같이 바꿨습니다.

let id = prompt("아이디를 입력하세요!")
let password = prompt("비밀번호를 입력하세요")
if( id == "jinok" && password === 12345){
  alert("로그인 되었습니다. "+id+"님 반갑습니다.!")
  }
else{
  alert("아이디 또는 패스워드가 잘 못 되었습니다.")
}