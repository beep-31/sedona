let closed = 'burger-item--closed',
    opened = 'burger-item--opened',
    burger = document.querySelector('#burger'),
    nav = document.querySelector('#header-nav');

burger.addEventListener('click', function(){
    if(nav.style.opacity==0){
        nav.style.opacity = 1;
        burger.classList.remove(closed);
        burger.classList.add(opened);
    } else{
        nav.style.opacity = 0;
        burger.classList.remove(opened);
        burger.classList.add(closed);
    }
});