const mobile_menu = document.querySelector(".mobile-menu"),
mobile_menu_close =  document.querySelector('.close');


if(mobile_menu){
    mobile_menu.addEventListener( "click" , () =>{
        document.querySelector('.mobile-menu-list').style.left = '0%'
        document.querySelector('.menu-shadow').style.display = 'block'
        document.querySelector('body').style.overflow = 'hidden'
    });
}
if(mobile_menu_close){
    mobile_menu_close.addEventListener( "click" , () =>{
        document.querySelector('.mobile-menu-list').style.left = '-30%'
        document.querySelector('.menu-shadow').style.display = 'none'
        document.querySelector('body').style.overflow = 'auto'
    });
}
