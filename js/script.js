const mobile_menu = document.querySelector(".mobile-menu"),
mobile_menu_close =  document.querySelector('.close'),
target_anchor = document.querySelectorAll('.mobile-menu-list>ul>li>a');

if(mobile_menu){
    mobile_menu.addEventListener( "click" , () =>{
        document.querySelector('.mobile-menu-list').style.left = '0%'
        document.querySelector('.menu-shadow').style.display = 'block'
        document.querySelector('body').style.overflow = 'hidden'
    });
}
if(mobile_menu_close){
    mobile_menu_close.addEventListener( "click" , () =>{
        document.querySelector('.mobile-menu-list').style.left = '-89%'
        document.querySelector('.menu-shadow').style.display = 'none'
        document.querySelector('body').style.overflow = 'auto'
    });
}

if (target_anchor) {
    target_anchor.forEach((element) => {
        element.addEventListener('click', () => {
            let selected_li = element;
            let closestLi = selected_li.closest('li');

            if (closestLi) {
                // Remove 'active' class from all 'li' elements
                document.querySelectorAll('.menu-list').forEach((li) => {
                    li.classList.remove('active');
                });

                let hasMenuList = closestLi.querySelector('.menu-list');

                if (hasMenuList) {
                    hasMenuList.classList.toggle('active');
                }
            }
        });
    });
}

const check_box = document.querySelector('#price');
const defaultText = "$60"; // Replace with your default text

if (check_box) {
    check_box.addEventListener('change', () => {
        let basic_monthly = document.querySelector('.basic-monthly');
        let basic_yearly = document.querySelector('.basic-yearly');
        let business_monthly = document.querySelector('.bussines-monthly');
        let business_yearly = document.querySelector('.bussines-yearly');
        if (check_box.checked) {
            basic_monthly.textContent = "$54";
            basic_yearly.style.visibility = "visible";
            business_monthly.textContent = "$54";
            business_yearly.style.visibility = "visible";
        } else {
            console.log('not checked');
            basic_monthly.textContent = defaultText;
            basic_yearly.style.visibility = "hidden";
            business_monthly.textContent = defaultText;
            business_yearly.style.visibility = "hidden";
        }
    });
}

