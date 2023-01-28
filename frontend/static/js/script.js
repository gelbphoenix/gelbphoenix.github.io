document.addEventListener("DOMContentLoaded", getBackground());
document.addEventListener("DOMContentLoaded", getCrYear());
document.getElementById('menubutton').addEventListener("click", toggleDisplay.bind(null, 'mobil'));
document.getElementById("mobil-link").addEventListener("click", () => {
  const element = document.getElementById("mobil")

  if (element.style.display === "flex") {
    element.style.display = "none";
  } else {
    console.log("Error: Mobilnav can't be closed.")
  }
});

function getBackground() {
  let backgrounds = [
    "background.jpg",
    "background2.jpg",
    "background3.jpg",
    "background4.jpg"
  ];
  let randomIndex = Math.floor(Math.random() * backgrounds.length);
  const chosenBackground = backgrounds[randomIndex];
  document.querySelector("html").style.background = "url(/frontend/index/background/" + chosenBackground +") no-repeat center fixed";
  document.querySelector("html").style.backgroundSize = "cover";
  document.querySelector("html").style.zIndex = "0";
};

function getCrYear() {
  const date = new Date();
  const dateyear = date.getFullYear();
  document.getElementById('year').innerHTML = "©" + dateyear;
};

function toggleDisplay(id) {
    const element = document.getElementById(id);
    if (element.style.display === "flex") {
        element.style.display = "none";
        if (id === "mobil") {
          const mb = document.getElementById('menubutton')
          mb.src='../frontend/index/icons/menu.png';
        }
    } else {
        element.style.display = "flex";
        if (id === "mobil")  {
          const mb = document.getElementById('menubutton')
          mb.src='../frontend/index/icons/close.png';
        }
    }
};