class TestRouteAffichage {

  testeVersChaine() {
    const vancouver = new Ville("Vancouver", 94.0, 15.0);
    const seattle = new Ville("Seattle", 88.0, 52.0);
    const route = new Route(vancouver, seattle, "gris");

    // Test visuel
    console.log(route.versChaine());

    // Test automatique
    console.assert(
      route.versChaine() === "Vancouver - Seattle /gris-1",
      "Affichage Route => Vancouver - Seattle est de couleur gris et de taille 1"
    );
  }
}

// Exécution des tests
const test = new TestRouteAffichage();
test.testeVersChaine();

console.log("Test Route Affichage terminé.");
