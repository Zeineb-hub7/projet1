class TestPlateauInitialisationVille {

  testeTailleTabVilles() {
    const plateau = new Plateau();
    console.assert(
      plateau.getVille().length === 36,
      "villes:taille du tableau = 36"
    );
  }

  testeInitTabVilles() {
    const plateau = new Plateau();

    console.assert(
      plateau.getVille()[0].versChaine() === "Vancouver(94.0,15.0)",
      "Init Tab Ville => 1:Vancouver"
    );
    console.assert(
      plateau.getVille()[14].versChaine() === "Duluth(538.0,102.0)",
      "Init Tab Ville => 15:Duluth"
    );
    console.assert(
      plateau.getVille()[35].versChaine() === "Boston(876.0,150.0)",
      "Init Tab Ville => 36:Boston"
    );
  }
}

// Exécution des tests
const test = new TestPlateauInitialisationVille();
test.testeTailleTabVilles();
test.testeInitTabVilles();

console.log("Tests Plateau Initialisation Ville terminés.");
