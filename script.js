// const left=document.querySelector('.left');
// const right=document.querySelector('.right');
// const slider=document.querySelector('.slider-index');

// const images= document.querySelectorAll('.image-index')
// let slideNumber=1;
// const length=images.length

// const nextSlide= ()=>{
//     slider.style.transform=  `translateX(-${slideNumber*1100}px)`;
//     slideNumber++;
// };
// const preSlide= ()=>{
    
//     slider.style.transform=  `translateX(-${(slideNumber-2)*1100}px)`;
//     slideNumber--;
// };
// const getFirstSlide= ()=>{
//    slider.style.transform=  `translateX(0px)`;
//     slideNumber=1;
// };

// const getLastSlide= ()=>{
//    slider.style.transform=  `translateX(-${(length-1)*1100}px)`;
//     slideNumber=length;
// };


// right.addEventListener('click',()=>{
//    slideNumber <length ? nextSlide() : getFirstSlide();
    
 
// });

// left.addEventListener('click',()=>{
//    slideNumber > 1 ? preSlide() : getLastSlide();
    
 
// });


const slider = document.getElementById('slider');
const images = document.querySelectorAll('.image-index');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let index = 0;
const total = images.length;

function showSlide(i) {
  slider.style.transform = `translateX(-${i * 100}vw)`;
}

function nextSlide() {
  index = (index + 1) % total;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + total) % total;
  showSlide(index);
}

right.addEventListener('click', nextSlide);
left.addEventListener('click', prevSlide);

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

