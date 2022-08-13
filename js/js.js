document.getElementById('singUp__form').addEventListener("submit", checkForm);
document.getElementById('eye').addEventListener("click", showPassword);
document.getElementById('menu__btn').addEventListener("click", showMenu);
document.getElementById('list__btn1').addEventListener("click", showMenu);
document.getElementById('list__btn2').addEventListener("click", showMenu);
document.getElementById('list__btn3').addEventListener("click", showMenu);
document.getElementById('list__btn4').addEventListener("click", showMenu);
document.getElementById('list__btn5').addEventListener("click", showMenu);

function checkForm(event) {
    event.preventDefault();

    let elem = document.getElementById('singUp__form');
    let email = elem.email.value;
    let password = elem.password.value;
    let btn = elem.sumbit__btn.value;


    if (email.split("@").length < 2) {
        document.getElementById('error__email').innerHTML = 'Email must contain "@"';
        document.getElementById('error__email').className = 'error__email';
    }else if (email.split("@").length > 2) {
        document.getElementById('error__email').innerHTML = 'Email must contain more than two "@" characters';
        document.getElementById('error__email').className = 'error__email';
    }else {
        if (email.split(".").length < 2) {
        document.getElementById('error__email').innerHTML = 'Email must contain "."';
        document.getElementById('error__email').className = 'error__email';
        }else {
            document.getElementById('error__email').innerHTML = '';
        }
    }
}

function showPassword() {
    let target = document.getElementById('eye');
    let password = document.getElementById('password');

    if (password.type == 'password') {
        target.classList.add('view');
        password.type = 'text';
    }else {
        target.classList.remove('view');
        password.type = 'password';
    }
    return false;
}

function showMenu() {

    let menu = document.getElementById('menu__btn');
    let line1 = document.getElementById('line__one');
    let line2 = document.getElementById('line__two');
    let line3 = document.getElementById('line__three');
    let menuContainer = document.getElementById('menu');
    let listContainer = document.getElementById('menu__list')

    if (menu.classList == 'menu__btn') {
        menu.classList.add('open');
        line1.classList.add('line__one__rotate');
        line2.classList.add('line__two__rotate');
        line3.classList.add('line__three__rotate');
        menuContainer.classList.remove('close__menu');
        listContainer.classList.remove('list__close');

    }else {
        menu.classList.remove('open');
        line1.classList.remove('line__one__rotate');
        line2.classList.remove('line__two__rotate');
        line3.classList.remove('line__three__rotate');
        menuContainer.classList.add('close__menu');
        listContainer.classList.add('list__close');
    }
}
                          //Form end

                          //Block_animations

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }
            // else {
            //     animItem.classList.remove('_active');
            // }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    
    setTimeout(() => {
        animOnScroll();
    }, 300);}