let pics = document.querySelectorAll('.pic');
let lightbox = document.querySelector('#lightbox');
let lightboxImage = document.querySelector('#lightboxImage');

pics.forEach((e)=>{
  e.addEventListener('click',showLightbox);
});

function showLightbox(){
  let bigLocation = this.getAttribute('bigImg'); 
  lightboxImage.setAttribute("src", bigLocation);
  lightbox.style.display = "block";  // 라이트박스 이미지를 화면에 표시
}

lightbox.addEventListener('click',hiddenLightbox);

function hiddenLightbox(){
  lightbox.style.display = "none";  // lightbox 요소를 화면에서 감춤
}
