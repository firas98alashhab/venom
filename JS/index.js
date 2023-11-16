let menutoggle = document.querySelector('.toggle');
let menuItems = document.getElementById('menu-item');

menutoggle.onclick = function() {
    menutoggle.classList.toggle('activeBtn');

    if(menutoggle.classList.contains('activeBtn')) {
        menuItems.style.display = 'block';
    }else{
        menuItems.style.display = 'none';
    }
}
