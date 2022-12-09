const active = document.getElementById('modal_main')
const close = active.querySelector('.modal__close')
const show = active.querySelector('.show-success')
const active2 = document.getElementById('modal_success')
const close2 = active2.querySelector('.modal__close')

active.classList.add('modal_active')
close.onclick = closeModal
show.onclick = showSuc
close2.onclick = closeWind

function closeModal(){
   active.classList.remove('modal_active') 
}
function showSuc() {
    active2.classList.add('modal_active')
}
 function closeWind(){
     active2.classList.remove('modal_active')
 } 

