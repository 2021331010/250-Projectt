const left=document.querySelector('.left');
const right=document.querySelector('.right');
const slider=document.querySelector('.slider-index');

const images= document.querySelectorAll('.image-index')
let slideNumber=1;
const length=images.length

const nextSlide= ()=>{
    slider.style.transform=  `translateX(-${slideNumber*1100}px)`;
    slideNumber++;
};
const preSlide= ()=>{
    
    slider.style.transform=  `translateX(-${(slideNumber-2)*1100}px)`;
    slideNumber--;
};
const getFirstSlide= ()=>{
   slider.style.transform=  `translateX(0px)`;
    slideNumber=1;
};

const getLastSlide= ()=>{
   slider.style.transform=  `translateX(-${(length-1)*1100}px)`;
    slideNumber=length;
};


right.addEventListener('click',()=>{
   slideNumber <length ? nextSlide() : getFirstSlide();
    
 
});

left.addEventListener('click',()=>{
   slideNumber > 1 ? preSlide() : getLastSlide();
    
 
});

