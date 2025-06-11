class TestRouteInitialisation {
  testeRouteInitialisation() {
    const vancouver = new Ville("Vancouver", 94.0, 15.0);
    const seattle = new Ville("Seattle", 88.0, 52.0);
    const route = new Route(vancouver, seattle, "gris");

    console.assert(
      route.getNom() === "Vancouver - Seattle",
      "Initialisation Route : nom = Vancouver - Seattle"
    );
    console.assert(
      route.getVilleDepart() === vancouver,
      "Initialisation Route : ville départ = Vancouver"
    );
    console.assert(
      route.getVilleArrivee() === seattle,
      "Initialisation Route : ville arrivée = Seattle"
    );
    console.assert(
      route.getCouleur() === "gris",
      "Initialisation Route : couleur = gris"
    );
    console.assert(
      route.getLongueur() === 1,
      "Initialisation Route : longueur = 1"
    );
    console.assert(
      route.getNombrePoints() === 1,
      "Initialisation Route : nombre points = 1"
    );
  }
}

// Exécution des tests
const test = new TestRouteInitialisation();
test.testeRouteInitialisation();

console.log("Test Route Initialisation terminé.");
