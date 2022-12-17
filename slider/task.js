const arrow = document.getElementsByClassName('slider__arrow') 
const slider = document.getElementsByClassName('slider__item')


arrow[0].onclick = activeLast
arrow[1].onclick = activeNext

const arraySliders= Array.from(slider)
   

function activeLast(){
    const activeSlider = arraySliders.findIndex((item) => item.classList.contains('slider__item_active')) 
    if (activeSlider == 0){
        slider[activeSlider].classList.remove('slider__item_active')
        slider[4].classList.add('slider__item_active')
        
    }
    
    else {
        slider[activeSlider].classList.remove('slider__item_active')
        slider[activeSlider-1].classList.add('slider__item_active')   
    }
    console.log(1)
}
function activeNext(){
    const activeSlider = arraySliders.findIndex((item) => item.classList.contains('slider__item_active')) 
    
    let lengthOfArray = arraySliders.length - 1;
    if (activeSlider == lengthOfArray){
        slider[activeSlider].classList.remove('slider__item_active')
        slider[0].classList.add('slider__item_active')
        
    }
    
    else {
        slider[activeSlider].classList.remove('slider__item_active')
        slider[activeSlider+1].classList.add('slider__item_active')   
    }
    
        
    }
    console.log(2)








console.log(slider)
console.log(arrow)
console.log(arraySliders)