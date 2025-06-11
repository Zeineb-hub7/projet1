class Joueur {
  constructor(numero, couleur) {
    this.numero = numero;
    this.couleur = couleur;
    this.nombreWagons = 45;
    this.score = 0;
  }

  getCouleur() {
    return this.couleur;
  }

  getNumero() {
    return this.numero;
  }

  getNombreWagons() {
    return this.nombreWagons;
  }

  getScore() {
    return this.score;
  }
}
