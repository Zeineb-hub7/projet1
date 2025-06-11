class TestJeuCreerJoueur {

  testeJeuCreerJoueursInitialisation() {
    const jeu = new Jeu();
    jeu.creeJoueurs(5);

    console.assert(
      jeu.getJoueurs().length === 5,
      "Jeu Init Joueurs => Taille du tableau de joueurs = 5"
    );

    console.assert(
      jeu.getJoueurs()[0].getNumero() === 0,
      "Jeu Init Joueurs => 1er joueur : numero = 0"
    );

    console.assert(
      jeu.getJoueurs()[0].getCouleur() === "bleu",
      "Jeu Init Joueurs => 1er joueur : bleu"
    );

    console.assert(
      jeu.getJoueurs()[2].getNumero() === 2,
      "Jeu Init Joueurs => 3e joueur : numero = 2"
    );

    console.assert(
      jeu.getJoueurs()[2].getCouleur() === "vert",
      "Jeu Init Joueurs => 3e joueur : vert"
    );

    console.assert(
      jeu.getJoueurs()[4].getNumero() === 4,
      "Jeu Init Joueurs => 5e joueur : numero = 4"
    );

    console.assert(
      jeu.getJoueurs()[4].getCouleur() === "noir",
      "Jeu Init Joueurs => 5e joueur : noir"
    );
  }

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

// Exécution des tests
const test = new TestJeuCreerJoueur();
test.testeJeuCreerJoueursInitialisation();
test.testeJeuCreerJoueursJoueurCourant();

console.log("Tests terminés.");
