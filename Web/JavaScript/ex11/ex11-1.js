let counter = 0
const listner = () => {
  header.innerText = `클릭횟수 : ${++counter}`
}

const header = document.createElement('h1')
header.innerText = `클릭횟수 : 0`

const p = document.createElement('p')
p.innerText = `이번트 연결상태 : 해제`

const connectButton = document.createElement('button')
connectButton.innerText = `연결`
connectButton.addEventListener('click', () =>{
  header.addEventListener('click', listner)
    p.innerText = '이벤트 연결상태 : 연결'
})

const disconnectButton = document.createElement('button')
disconnectButton.innerText = `해제`
disconnectButton.addEventListener('click', () =>{
  header.removeEventListener('click', listner)
    p.innerText = '이벤트 연결상태 : 해제'
})

document.body.appendChild(header)
document.body.appendChild(connectButton)
document.body.appendChild(disconnectButton)
document.body.appendChild(p)