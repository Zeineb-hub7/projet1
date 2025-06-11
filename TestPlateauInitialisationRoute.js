class TestPlateauInitialisationRoute {

  testeTailleTabRoutes() {
    const plateau = new Plateau();
    console.assert(
      plateau.getRoute().length === 78,
      "routes : taille du tableau = 78"
    );
  }

  testeInitTabRoutes() {
    const plateau = new Plateau();

    console.assert(
      plateau.getRoute()[0].getNom() === "Vancouver - Seattle",
      "Init Tab Route => Vancouver - Seattle"
    );
    console.assert(
      plateau.getRoute()[53].getNom() === "Little Rock - New Orleans",
      "Init Tab Route => Little Rock - New Orleans"
    );
    console.assert(
      plateau.getRoute()[77].getNom() === "New York - Washington",
      "Init Tab Route => New York - Washington"
    );
  }
}

// Exécution des tests
const test = new TestPlateauInitialisationRoute();
test.testeTailleTabRoutes();
test.testeInitTabRoutes();

console.log("Tests Plateau Initialisation Route terminés.");
