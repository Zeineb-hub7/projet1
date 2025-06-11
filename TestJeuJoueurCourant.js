class TestJeuJoueurCourant {
  
  testeJeuCreerJoueursJoueurCourant() {
    const jeu = new Jeu();
    jeu.creeJoueurs(5);

    console.assert(
      jeu.getJoueurCourant().getNumero() === 0,
      "Jeu Joueur Courant => numero = 0"
    );

    console.assert(
      jeu.getJoueurCourant().getCouleur() === "bleu",
      "Jeu Joueur Courant => couleur = bleu"
    );
  }
}

// Exécution du test
const test = new TestJeuJoueurCourant();
test.testeJeuCreerJoueursJoueurCourant();

console.log("Test 'Joueur Courant' terminé.");
