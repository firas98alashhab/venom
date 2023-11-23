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
        menuItems.style.display = 'flex';
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


// active class effect on scroll logic

document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".nav-item a");

    function handleNavClick(event) {
        event.preventDefault();
        var targetId = this.getAttribute("href").substring(1);
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    }

    function changeActiveNav() {
        var scrollPos = window.scrollY;

        navLinks.forEach(function (link) {
            var targetId = link.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement && targetElement.offsetTop <= scrollPos &&
                targetElement.offsetTop + targetElement.offsetHeight > scrollPos) {
                navLinks.forEach(function (link) {
                    link.classList.remove("active");
                    link.style.opacity = "";
                    link.style.transform = "";
                });

                link.classList.add("active");

                link.style.opacity = 1;
                link.style.transform = "scaleX(1)";
            }
        });
    }

    navLinks.forEach(function (link) {
        link.addEventListener("click", handleNavClick);
    });

    window.addEventListener("scroll", changeActiveNav);
});

