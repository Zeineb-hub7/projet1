class TestJoueurInitialisation {

  testeJoueurInitialisation() {
    const joueur = new Joueur(1, "bleu");

    console.assert(
      joueur.getCouleur() === "bleu",
      "Init Joueur => couleur = bleu"
    );

    console.assert(
      joueur.getNumero() === 1,
      "Init Joueur => numero = 1"
    );

    console.assert(
      joueur.getNombreWagons() === 45,
      "Init Joueur => nombre de wagons = 45"
    );

    console.assert(
      joueur.getScore() === 0,
      "Init Joueur => score = 0"
    );
  }
}

// Exécution du test
const test = new TestJoueurInitialisation();
test.testeJoueurInitialisation();

console.log("Test Joueur Initialisation terminé.");
