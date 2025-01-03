function toggleNavigationMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// js/main.js

// Functie om de leeftijd te berekenen op basis van de geboortedatum
function berekenLeeftijd(geboortedatum) {
    const vandaag = new Date();
    const geboorteDatum = new Date(geboortedatum);
    let leeftijd = vandaag.getFullYear() - geboorteDatum.getFullYear();
    const maand = vandaag.getMonth() - geboorteDatum.getMonth();
    if (maand < 0 || (maand === 0 && vandaag.getDate() < geboorteDatum.getDate())) {
        leeftijd--;
    }
    return leeftijd;
}

// Event listener die wacht tot de DOM volledig is geladen
document.addEventListener("DOMContentLoaded", function() {
    const geboortedatum = "2002-03-03"; // Vervang dit door jouw geboortedatum (YYYY-MM-DD)
    const leeftijdElement = document.getElementById("leeftijd");
    if (leeftijdElement) {
        leeftijdElement.textContent = berekenLeeftijd(geboortedatum);
    }
});
