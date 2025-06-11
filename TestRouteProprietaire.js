class TestRouteProprietaire {
  testeRouteProprietaireInit() {
    const vancouver = new Ville("Vancouver", 94.0, 15.0);
    const seattle = new Ville("Seattle", 88.0, 52.0);
    const route = new Route(vancouver, seattle, "gris");

    console.assert(
      route.getProprietaire() === null,
      "Propriétaire Route Init => aucun propriétaire"
    );
  }

  testeRouteProprietaireJoueur() {
    const vancouver = new Ville("Vancouver", 94.0, 15.0);
    const seattle = new Ville("Seattle", 88.0, 52.0);
    const route = new Route(vancouver, seattle, "gris");
    const joueur = new Joueur(0, "bleu");
    route.setProprietaire(joueur);

    console.assert(
      route.getProprietaire() === joueur,
      "Propriétaire Route => joueur bleu"
    );
  }

  testeRouteProprietaireChangement() {
    const vancouver = new Ville("Vancouver", 94.0, 15.0);
    const seattle = new Ville("Seattle", 88.0, 52.0);
    const route = new Route(vancouver, seattle, "gris");
    const joueur1 = new Joueur(0, "bleu");
    const joueur2 = new Joueur(1, "rouge");

    route.setProprietaire(joueur1);
    console.assert(
      route.getProprietaire() === joueur1,
      "Propriétaire Route => joueur bleu"
    );

    route.setProprietaire(joueur2);
    console.assert(
      route.getProprietaire() === joueur2,
      "Propriétaire Route => joueur rouge"
    );
  }
}

// Exécution des tests
const test = new TestRouteProprietaire();
test.testeRouteProprietaireInit();
test.testeRouteProprietaireJoueur();
test.testeRouteProprietaireChangement();

console.log("Test Route Propriétaire terminé.");
