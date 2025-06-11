// Supposons que les classes Joueur et Jeu sont déjà définies en JS

function testChangeJoueur() {
  const joueurs = [
    new Joueur(0, "Rouge"),
    new Joueur(1, "Blue"),
    new Joueur(2, "Vert")
  ];

  const jeu = new Jeu(joueurs);

  jeu.changeJoueur();
  console.assert(
    jeu.getJoueurCourant().getCouleur() === "Blue",
    "Après un changement, le joueur courant devrait être Blue"
  );

  jeu.changeJoueur();
  console.assert(
    jeu.getJoueurCourant().getCouleur() === "Vert",
    "Après un deuxième changement, le joueur courant devrait être Vert"
  );

  console.log("Tests de changement de joueur terminés.");
}

// Appeler la fonction de test
testChangeJoueur();
