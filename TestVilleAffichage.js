class TestVilleAffichage {
  static main() {
    const testVilleAffichage = new TestVilleAffichage();
    testVilleAffichage.testeVilleAffichage();
  }

  /**
   * @since Incrément 1
   */
  testeVilleAffichage() {
    const ville = new Ville("Vancouver", 94.0, 15.0);
    Test.assertEquals(
      ville.versChaine(),
      "Vancouver (94.0, 15.0)",
      "Affichage Ville => Vancouver aux coordonnees (94.0,15.0)"
    );
  }
}

// Lancer le test
TestVilleAffichage.main();
