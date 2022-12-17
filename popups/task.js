const active = document.getElementById('modal_main')
const close = document.querySelectorAll('.modal__close')
const show = active.querySelector('.show-success')
const active2 = document.getElementById('modal_success')



active.classList.add('modal_active')
for (let i = 0; i < close.length; i++ ){
    close[i].onclick = closeModal      
        function closeModal(){
            const closed = close[i].closest('.modal_active')
            console.log(closed)
            if(closed){
                closed.remove('modal_active')
                console.log(1)
            }
        }
}

show.onclick = showSuc
function showSuc() {
    active.remove('modal_active')
    active2.classList.add('modal_active')
}

