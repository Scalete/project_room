window.addEventListener('DOMContentLoaded', () => {
    //menu
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })

    //add logos

    const logosParent = document.querySelector('.logos__wrapper');
    for (let i = 1; i <= 18; i++) {
        const img = document.createElement('img');
        img.src = `icons/logos/${i}.svg`;
        img.alt = 'icon';
        img.classList.add('logos__icon');
        logosParent.append(img);
    }
})