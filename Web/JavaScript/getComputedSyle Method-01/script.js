function color(z){
  console.log(z)
  let a = getComputedStyle(z);
  let b = a.backgroundColor;
  let body = document.getElementsByTagName('body')[0];
  console.log(body)
  body.style.backgroundColor = b;
}