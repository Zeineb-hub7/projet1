class TestPlateauRechercheRoute {
  
  testeRechercheRoute() {
    const plateau = new Plateau();
    const route = plateau.rechercheRoute("Little Rock - New Orleans");
    console.assert(
      route !== null && route.getNom() === "Little Rock - New Orleans",
      "Recherche Route => Little Rock - New Orleans"
    );
  }

  testeRechercheRouteInexistante() {
    const plateau = new Plateau();
    const route = plateau.rechercheRoute("Paris - Marseille");
    console.assert(
      route === null,
      "Recherche Route => Paris - Marseille n'est pas une route du plateau"
    );
  }
}

// Exécution des tests
const test = new TestPlateauRechercheRoute();
test.testeRechercheRoute();
test.testeRechercheRouteInexistante();

console.log("Tests Plateau Recherche Route terminés.");
