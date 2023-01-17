document.getElementById('menubutton').addEventListener("click", navi);
document.getElementById('button-pol').addEventListener("click", polInfo);
document.getElementById('button-cod').addEventListener("click", codeInfo);
document.getElementById('button-gen').addEventListener("click", genInfo);

function navi() {
    const nav = document.getElementById('mobil');
    const menubutton = document.getElementById('menubutton');

    if (nav.style.display == 'flex') {
        nav.style.display = 'none';
        menubutton.innerHTML='menu';
    } else {
        nav.style.display = 'flex';
        menubutton.innerHTML='clear';
    };
}

function polInfo() {
    const poli = document.getElementById('politic-infos');
    const pbutton = document.getElementById('button-pol');

    if (poli.style.display == 'flex') {
        poli.style.display = 'none';
    } else {
        poli.style.display = 'flex';
    };
}

function codeInfo() {
    const cod = document.getElementById('code-infos');
    const cbutton = document.getElementById('button-cod');

    if (cod.style.display == 'flex') {
        cod.style.display = 'none';
    } else {
        cod.style.display = 'flex';;
    };
}

function genInfo() {
    const gen = document.getElementById('general-infos');
    const gbutton = document.getElementById('button-gen');

    if (gen.style.display == 'flex') {
        gen.style.display = 'none';
    } else {
        gen.style.display = 'flex';
    };
}