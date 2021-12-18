const SliderBlock = document.querySelector(".slider-block-1")
const SliderBlockTwo = document.querySelector(".slider-block-2")
const SlideBtn = [
    document.querySelector(".slide"),
    document.querySelector(".slide-2"),
    document.querySelector(".slide-3"),
    document.querySelector(".slide-4"),
]

for (let index = 0; index < SlideBtn.length; index++) {
    const s = SlideBtn[index];
    
s.addEventListener("click", ()=>{
    SliderBlock.classList.toggle("slider-block-active")
    s.classList.remove("active")
    
    setTimeout(() => {
        
        
       
        SliderBlock.classList.toggle("slider-block-active-2")
    }, 500);

    
   
})
    
}


const hamburger = document.querySelector(".input")
const mobilemenu = document.querySelector(".mobile-menu")

hamburger.addEventListener("click", () =>{
    mobilemenu.classList.toggle("menu-active")
    setTimeout(() => {
        mobilemenu.classList.toggle("menu-active-2")
        
    },10);
   

    console.log("work");
   
})
