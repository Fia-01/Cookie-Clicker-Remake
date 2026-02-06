const upgrade = document.getElementById("upgradeimg");
const cookiessec = document.getElementById("cookiessec");
const prixupgrade1 = document.getElementById("prixupgrade1");
const nbupgrade1 = document.getElementById("nbupgrade1");
const fondcat = document.getElementById("fondcat");
const woodcat = document.getElementById("woodcat");
const cat = document.getElementById("cat");
const nbupgrade2 = document.getElementById("nbupgrade2");
const catup = document.getElementById("catup");
const fondroiplus = document.querySelector(".fondroiplus");


let ckps = 0;
let prixboutique1 = 50;
let nbup1 = 0;
let nbup2 = 0;
let nbup3 = 0;
let nbup4 = 0;

upgrade.addEventListener("click", () => {

    if(nombrecookies >= prixup) 
    {
        nombrecookies -= prixup; // on paye l'amélioration
        ckps += 1;        // +1 cookie par seconde
        prixup = Math.floor(prixup * 1.2);
        nbup1 ++;
        updateUI();

        fondcat.style.display = "block";
        fondcat2.style.display = "block";
        fondcat3.style.display = "block";
        fondcat4.style.display = "block";
        woodcat.style.display = "block";
        fondcatplus.style.position = "relative";

    if(nbup1 <= 16){
        var chat = document.createElement("img");
        chat.src = "./Images/catup.png";
        chat.style.position = "absolute";
        chat.style.zIndex = "10";
        chat.height = 50;
        chat.width = 70;
        chat.style.userSelect = "none";
        chat.draggable = false;


        if(nbup1 % 2 == 1){
            chat.style.left = (nbup1 * 60) + 500 + "px";
            chat.style.top = "26vh";
        }
        else{
            chat.style.left = (nbup1 * 60) + 500 + "px";
            chat.style.top = "27vh";
        }
    }

        fondcatplus.appendChild(chat);

    }
});

setInterval(() => {
    nombrecookies += ckps; // ajoute les cookies produits
    updateUI();                         // met à jour l'affichage
}, 1000); //temp en ms

//boutique
const boutique1 = document.getElementById("boutique1");
const infoboutique = document.querySelector(".info-boutique");

    boutique1.addEventListener("mouseenter", () => {
        infoboutique.style.display = "block"; // Affiche l'info-boutique
    });

    boutique1.addEventListener("mouseleave", () => {
        infoboutique.style.display = "none";  // Cache l'info-boutique
    });


    boutique1.addEventListener("click", () => {
    if(nombrecookies >= prixboutique1) 
    {
        nombrecookies -= prixboutique1; // on paye bout 1
        cookiesparclick += 1;        // +1 cookie par seconde
        prixboutique1 = Math.floor(prixboutique1 * 1.2);
        updateUI();
    }
});

const boutique2 = document.getElementById("boutique2");
const infoboutique2 = document.querySelector(".info-boutique2");


boutique2.addEventListener("mouseenter", () => {
        infoboutique2.style.display = "block"; // Affiche l'info-boutique
    });

    boutique2.addEventListener("mouseleave", () => {
        infoboutique2.style.display = "none";  // Cache l'info-boutique
    });


    boutique2.addEventListener("click", () => {
    if(nombrecookies >= prixboutique1) 
    {
        nombrecookies -= prixboutique1; // on paye bout 1
        cookiesparclick += 1;        // +1 cookie par seconde
        prixboutique1 = Math.floor(prixboutique1 * 1.2);
        updateUI();
    }
});

