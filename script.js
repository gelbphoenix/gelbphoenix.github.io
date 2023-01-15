document.getElementById('menubutton').addEventListener("click", navi)

function navi() {
    const nav = document.getElementById('mobil');
    const menubutton = document.getElementById('menubutton');

    if (nav.style.display == 'block') {
        nav.style.display = 'none';
        menubutton.innerHTML='menu';
    } else {
        nav.style.display = 'block';
        menubutton.innerHTML='clear';
    };
}