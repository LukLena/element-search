const arrow = document.getElementsByClassName('slider__arrow') 
const slider = document.getElementsByClassName('slider__item')
console.log(slider)
console.log(arrow)
arrow.onclick = active;

function active(){
    if (arrow.namedItem('slider__arrow_next')){
        for (let i=0; i< slider.length; i++){ 
        slider[i] + 1;
            console.log(slider[i])
        }   
    }
}