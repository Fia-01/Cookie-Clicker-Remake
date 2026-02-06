const upgrade2 = document.getElementById("upgradeimg2");
const upgrade3 = document.getElementById("upgradeimg3");
const upgrade4 = document.getElementById("upgradeimg4");
const displayprixup2 = document.getElementById("displayprixup2");
const displayprixup3 = document.getElementById("displayprixup3");
const displayprixup4 = document.getElementById("displayprixup4");
const fondoursplus = document.getElementById("fondoursplus");
const fondoursplus2 = document.getElementById("fondoursplus2");
const fondoursplus3 = document.getElementById("fondoursplus3");
const fondoursplus4 = document.getElementById("fondoursplus4");
const oursup = document.getElementById("oursup");
const chefup = document.getElementById("chefup");
const roiup = document.getElementById("roiup");
const oursimg = document.getElementById("ours");



let prixup = 15;
let prixup2 = 150;
let prixup3 = 2000;
let prixup4 = 12000;

//ours
upgrade2.addEventListener("click", () => {
    
    if(nombrecookies >= prixup2) {
        nombrecookies -= prixup2;       // on paye l'amélioration
        ckps += 5;                      // +5 cookie par seconde
        prixup2 = Math.floor(prixup2 * 1.2);
        nbup2 ++;
        updateUI();
        fondoursplus.style.display = "block";
        fondoursplus.style.position = "relative";

        if(nbup2 <= 19){
        var ours = document.createElement("img");
        ours.src = "./Images/oursup.png";
        ours.style.position = "absolute";
        ours.style.zIndex = "10";
        ours.height = 60;
        ours.width = 80;
        ours.style.userSelect = "none";
        ours.draggable = false;


        if(nbup2 % 2 == 1){
            ours.style.left = (nbup2 * 50) + -30 + "px";
            ours.style.top = "41vh";
        }
        else{
            ours.style.left = (nbup2 * 50) + -30 + "px";
            ours.style.top = "40vh";
        }
    }
        fondoursplus.appendChild(ours);
    }
});

//chef
upgrade3.addEventListener("click", () => {

    if(nombrecookies >= prixup3) {
        nombrecookies -= prixup3;       // on paye l'amélioration
        ckps += 100;                      // +5 cookie par seconde
        prixup3 = Math.floor(prixup3 * 1.2);
        nbup3 ++;
        updateUI();
        fondchefplus.style.display = "block";
        fondchefplus.style.position = "relative";

        if(nbup3 <= 20){
        var chef = document.createElement("img");
        chef.src = "./Images/chefup.png";
        chef.style.position = "absolute";
        chef.style.zIndex = "10";
        chef.height = 80;
        chef.width = 100;
        chef.style.userSelect = "none";
        chef.draggable = false;


        if(nbup3 % 2 == 1){
            chef.style.left = (nbup3 * 50) + -30 + "px";
            chef.style.top = "53vh";
        }
        else{
            chef.style.left = (nbup3 * 50) + -30 + "px";
            chef.style.top = "54vh";
        }
    }
        fondchefplus.appendChild(chef);
    }
});

//roi
const roiimg= document.getElementById("roiimg");

if (nombrecookies >= prixup4) {
    // CAS 1 : J'ai assez d'argent -> Image normale
    roiimg.style.filter = "brightness(1)"; 
    roiimg.style.cursor = "pointer"; // (Optionnel) Met la petite main de clic

} else {
    // CAS 2 : Je n'ai PAS assez -> Image sombre
    roiimg.style.filter = "brightness(0.25)"; 
    roiimg.style.cursor = "not-allowed"; // (Optionnel) Met un sens interdit

}

upgrade4.addEventListener("click", () => {

    if(nombrecookies >= prixup4) {
        nombrecookies -= prixup4;       // on paye l'amélioration
        ckps += 850;                      // +800 cookie par seconde
        prixup4 = Math.floor(prixup4 * 1.2);
        nbup4 ++;
        updateUI();
        fondroiplus.style.display = "block";
        fondroiplus.style.position = "relative";


        if(nbup4 <= 19){
        var roi = document.createElement("img");
        roi.src = "./Images/roiup.png";
        roi.style.position = "absolute";
        roi.style.zIndex = "10";
        roi.height = 80;
        roi.width = 120;
        roi.style.userSelect = "none";
        roi.draggable = false;


        if(nbup4 % 2 == 1){
            roi.style.left = (nbup4 * 50) + -30 + "px";
            roi.style.top = "69vh";
        }
        else{
            roi.style.left = (nbup4 * 50) + -30 + "px";
            roi.style.top = "70vh";
        }
    }
        fondroiplus.appendChild(roi);
    }
});

