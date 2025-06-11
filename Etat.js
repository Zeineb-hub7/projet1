/**
 * La classe Etat représente un état des États-Unis à dessiner sur le plateau de jeu.
 * Chaque état dispose d'un nom et d'un contour (ensemble de coordonnées permettant 
 * de dessiner la carte).
 */
class Etat {
  /**
   * Crée un état
   * @param {string} nom - Le nom de l'état
   * @param {string} contour - Les coordonnées des points à dessiner
   */
  constructor(nom, contour) {
    this.nom = nom;
    this.contour = contour;
  }

  /**
   * @returns {string} Le nom de l'état
   */
  getNom() {
    return this.nom;
  }

  /**
   * @returns {string} Les coordonnées des points permettant de dessiner l'état
   */
  getContour() {
    return this.contour;
  }
}
