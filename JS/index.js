let menutoggle = document.querySelector('.toggle');
let menuItems = document.getElementById('menu-item');

menutoggle.onclick = function() {
    menutoggle.classList.toggle('activeBtn');

    if(!menutoggle.classList.contains('activeBtn')) {
        menuItems.style.display = 'none';
    }else{
        menuItems.style.display = 'block';
    }
}
