/**
 * La classe Route représente une route dans le jeu des Aventuriers du Rail.
 * Une route dispose d'une ville de départ, d'une ville d'arrivée et d'une couleur.
 * À partir de l'incrément 3, une route pourra être possédée par un joueur.
 */
class Route {
  /**
   * @param {Ville} villeDepart - Ville de départ
   * @param {Ville} villeArrivee - Ville d'arrivée
   * @param {string} couleur - Couleur de la route
   */
  constructor(villeDepart, villeArrivee, couleur) {
    this.villeDepart = villeDepart;
    this.villeArrivee = villeArrivee;
    this.couleur = couleur;
  }

  /** @returns {Ville} */
  getVilleDepart() {
    return this.villeDepart;
  }

  /** @returns {Ville} */
  getVilleArrivee() {
    return this.villeArrivee;
  }

  /** @returns {string} */
  getCouleur() {
    return this.couleur;
  }

  /** @returns {string} - Nom complet de la route */
  getNom() {
    return `${this.villeDepart.getNom()} - ${this.villeArrivee.getNom()}`;
  }

  /** @returns {number} - Longueur de la route (1 à 6) calculée à partir de la distance */
  getLongueur() {
    const x1 = this.villeDepart.getX();
    const y1 = this.villeDepart.getY();
    const x2 = this.villeArrivee.getX();
    const y2 = this.villeArrivee.getY();

    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const longueur = Math.floor(distance / 20.0);
    return Math.min(6, Math.max(1, longueur));
  }

  /** @returns {string} - Représentation chaîne de la route */
  versChaine() {
    return `${this.getNom()} /${this.getCouleur()}-${this.getLongueur()}`;
  }

  /** @returns {number} - Nombre de points attribués selon la longueur de la route */
  getNombrePoints() {
    const longueur = this.getLongueur();
    switch (longueur) {
      case 1: return 1;
      case 2: return 2;
      case 3: return 4;
      case 4: return 7;
      case 5: return 10;
      case 6: return 15;
      default: return 0;
    }

    // Variante alternative (commentée en Java)
    // const points = [0, 1, 2, 4, 7, 10, 15];
    // return (longueur >= 1 && longueur <= 6) ? points[longueur] : 0;
  }
}
