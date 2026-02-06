const cookie = document.getElementById("cookie");
const affichagecookies = document.getElementById("affichagecookies");
const ckpsDisplay = document.getElementById("ckpsDisplay");
const option1 = document.getElementById("option-item option-1");
const option2 = document.getElementById("option-item option-2");
const option3 = document.getElementById("option-item option-3");
const option4 = document.getElementById("option-item option-4");
const displayprixboutique1 = document.getElementById("prix-boutique1");


let nombrecookies = 0;
let cookiesparclick = 1000;

function updateUI() {           //fonction pr mettre a jour les prix etc
    affichagecookies.textContent = nombrecookies;
    ckpsDisplay.textContent = ckps;
    prixup1.textContent = prixup;
    displayprixup2.textContent = prixup2;
    displayprixup3.textContent = prixup3;
    displayprixup4.textContent = prixup4;
    nbupgrade1.textContent = nbup1;
    nbupgrade2.textContent = nbup2;
    nbupgrade3.textContent = nbup3;
    nbupgrade4.textContent = nbup4;
    displayprixboutique1.textContent = prixboutique1;

    if (nombrecookies >= prixup4) {
    roiimg.style.filter = "brightness(1)"; 
  } else {
    roiimg.style.filter = "brightness(0.25)"; 
  } 

if (nombrecookies >= prixup3) {
    chef.style.filter = "brightness(1)"; 
  } else {
    chef.style.filter = "brightness(0.25)"; 
  } 

  if (nombrecookies >= prixup2) {
    ours.style.filter = "brightness(1)"; 
  } else {
    ours.style.filter = "brightness(0.25)"; 
  } 

 if (nombrecookies >= prixup) {
    cat.style.filter = "brightness(1)"; 
  } else {
    cat.style.filter = "brightness(0.25)"; 
  } 


}

cookie.addEventListener("click", (e) => {
    nombrecookies += cookiesparclick;
    updateUI();

    const plus = document.createElement("div");
    plus.className = "plus-one";
    plus.textContent = "+ " + cookiesparclick;

    const offsetX = Math.random() * 30 - 15;
    const offsetY = Math.random() * 30 - 15;

    document.body.appendChild(plus);

    plus.style.left = e.pageX + offsetX + "px";
    plus.style.top = e.pageY - 30 + offsetY + "px";

    setTimeout(() => {
        plus.remove();
    }, 850);
});


//option

var modal = document.getElementById("fenetreOptions");

//bouton qui ouvre (classe .option-1)
var btnOption = document.querySelector(".option-1");

//bouton qui ferme (le X)
var span = document.getElementsByClassName("fermer")[0];

//clique Option (div .option-1)
btnOption.onclick = function() {
  modal.style.display = "block";
}

//bouton X :
span.onclick = function() {
  modal.style.display = "none";
}

//clique  dehors de la fenetre
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}