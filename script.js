function validerFormulaire() {
    const montant = parseFloat(document.getElementById("montant").value);
    const personnes = parseInt(document.getElementById("personnes").value);
    let estValide = true;
    
    const erreurMontant = document.getElementById("erreurMontant");
    const erreurPersonnes = document.getElementById("erreurPersonnes");
    
    erreurMontant.textContent = "";
    erreurPersonnes.textContent = "";
    
    if (isNaN(montant) || montant <= 0) {
        erreurMontant.textContent = "Le montant doit être supérieur à 0.";
        estValide = false;
    }
    
    if (isNaN(personnes) || personnes <= 0) {
        erreurPersonnes.textContent = "Le nombre de personnes doit être supérieur à 0.";
        estValide = false;
    }
    
    return estValide;
    }
    
    function afficherResultats(pourcentage) {
    if (!validerFormulaire()) return;
    
    const montant = parseFloat(document.getElementById("montant").value);
    const personnes = parseInt(document.getElementById("personnes").value);
    
    const totalPourboire = montant * (pourcentage / 100);
    const pourboireParPersonne = totalPourboire / personnes;
    
    document.getElementById("totalPourboire").textContent = totalPourboire.toFixed(2) + " DH";
    document.getElementById("pourboireParPersonne").textContent = pourboireParPersonne.toFixed(2) + " DH";
    }
    
    function calculerPourboire5() {
    afficherResultats(5);
    }
    
    function calculerPourboire10() {
    afficherResultats(10);
    }
    
    function calculerPourboire15() {
    afficherResultats(15);
    }
    
    function calculerPourboire25() {
    afficherResultats(25);
    }
    
    function calculerPourboire50() {
    afficherResultats(50);
    }