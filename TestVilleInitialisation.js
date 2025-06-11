import { Ville } from './ville.js';

class Test {
  static assertEquals(actual, expected, message) {
    if (actual !== expected) {
      console.error(`❌ ${message} | Attendu: ${expected}, Obtenu: ${actual}`);
    } else {
      console.log(`✅ ${message}`);
    }
  }
}

class TestVilleInitialisation {
  static main() {
    const testVilleInitialisation = new TestVilleInitialisation();
    testVilleInitialisation.testeVilleInitialisation();
  }

  testeVilleInitialisation() {
    const ville = new Ville("Vancouver", 94.0, 15.0);

    Test.assertEquals(ville.getX(), 94.0, "Init Ville => coordonnées x = 94.0");
    Test.assertEquals(ville.getY(), 15.0, "Init Ville => coordonnées y = 15.0");
    Test.assertEquals(ville.getNom(), "Vancouver", "Init Ville => nom = Vancouver");
  }
}

TestVilleInitialisation.main();
