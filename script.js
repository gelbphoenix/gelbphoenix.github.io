document.getElementById('menubutton').addEventListener("click", toggleDisplay.bind(null, 'mobil'));
document.getElementById('button-pol').addEventListener("click", toggleDisplay.bind(null, 'politic-infos'));
document.getElementById('button-cod').addEventListener("click", toggleDisplay.bind(null, 'code-infos'));
document.getElementById('button-gen').addEventListener("click", toggleDisplay.bind(null, 'general-infos'));

function toggleDisplay(id) {
    const element = document.getElementById(id);
    if (element.style.display === "flex") {
        element.style.display = "none";
        if (id === "mobil") {
          const mb = document.getElementById('menubutton')
          mb.src='./index/icons/menu.png';
        }
    } else {
        element.style.display = "flex";
        if (id === "mobil")  {
          const mb = document.getElementById('menubutton')
          mb.src='./index/icons/close.png';
        }
    }
}