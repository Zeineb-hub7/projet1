class TestPlateauRechercheVille {
  
  testeRechercheVille() {
    const plateau = new Plateau();
    const ville = plateau.rechercheVille("Boston");
    console.assert(
      ville !== null && ville.versChaine() === "Boston (876.0,150.0)",
      "Recherche Ville => Boston (876.0,150.0)"
    );
  }

  testeRechercheVilleInexistante() {
    const plateau = new Plateau();
    const ville = plateau.rechercheVille("Paris");
    console.assert(
      ville === null,
      "Recherche Ville => Paris n'existe pas sur le plateau"
    );
  }
}

// Exécution des tests
const test = new TestPlateauRechercheVille();
test.testeRechercheVille();
test.testeRechercheVilleInexistante();

console.log("Tests Plateau Recherche Ville terminés.");
