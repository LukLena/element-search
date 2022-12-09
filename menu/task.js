const arrayMenu = document.getElementsByClassName('menu__link')
                                                  
const menu = document.getElementsByClassName('menu_sub')
for (let i = 0; i < arrayMenu.length; i++){
     arrayMenu[i].onclick = active;
    
    function active(){
       const activeMenu = arrayMenu[i].parentElement.querySelector('.menu_sub')
      if (activeMenu){
          activeMenu.classList.toggle('menu_active')
          return false
      } 
    }

}

