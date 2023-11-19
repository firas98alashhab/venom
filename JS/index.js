let menutoggle = document.querySelector('.toggle');
let menuItems = document.getElementById('menu-item');
let mobileNav = document.querySelector('.mobile-nav');
let body = document.body;

let overlay = document.createElement('div');
overlay.classList.add('overlay');


function closeMobileNav() {
    menutoggle.classList.remove('activeBtn');
    mobileNav.classList.remove('open');
    menuItems.style.display = 'none';
    body.style.overflow = 'auto';
    overlay.style.display = 'none';
}

menutoggle.onclick = function () {
    menutoggle.classList.toggle('activeBtn');
    mobileNav.classList.toggle('open');

    if (!menutoggle.classList.contains('activeBtn')) {
        menuItems.style.display = 'none';
        body.style.overflow = 'auto';
        overlay.style.display = 'none';
    } else {
        menuItems.style.display = 'block';
        body.style.overflow = 'hidden';
        overlay.style.display = 'block';
    }
};

menuItems.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        closeMobileNav();
    });
});

body.appendChild(overlay);


document.addEventListener("DOMContentLoaded", function () {
    var overlay = document.createElement('div');
    overlay.classList.add('overlay-2');
    document.body.appendChild(overlay);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            overlay.style.opacity = '1';
        } else {
            overlay.style.opacity = '0';
        }
    });
});
