/**
 * La classe Plateau représente le plateau de jeu des Aventuriers du Rail.
 * Il se compose d'un ensemble d'états, de villes et de routes.
 */
class Plateau {
  constructor() {
    this.etats = [];
    this.villes = [];
    this.routes = [];

    this.initialiseEtats();
    this.initialiseVilles();
    this.initialiseRoutes();
  }

  getEtats() {
    return this.etats;
  }

  getVille() {
    return this.villes;
  }

  getRoute() {
    return this.routes;
  }

  /**
   * Initialise les états à partir des données Donnees.ETATS
   */
  initialiseEtats() {
    this.etats = Donnees.ETATS.map(([nom, contour]) => new Etat(nom, contour));
  }

  /**
   * Initialise les villes à partir des données Donnees.VILLES
   */
  initialiseVilles() {
    this.villes = Donnees.VILLES.map(villeStr => {
      const parts = villeStr.trim().split(" ");
      const y = parseFloat(parts.pop());
      const x = parseFloat(parts.pop());
      const nom = parts.join(" ");
      return new Ville(nom, x, y);
    });
  }

  /**
   * Recherche une ville par son nom
   * @param {string} nomVille
   * @returns {Ville|null}
   */
  rechercheVille(nomVille) {
    if (!this.villes) return null;
    return this.villes.find(v => v && v.getNom() === nomVille) || null;
  }

  /**
   * Initialise les routes à partir des données Donnees.ROUTES
   */
  initialiseRoutes() {
    this.routes = Donnees.ROUTES.map(([nomDepart, nomArrivee, couleur]) => {
      const villeDepart = this.rechercheVille(nomDepart);
      const villeArrivee = this.rechercheVille(nomArrivee);
      return new Route(villeDepart, villeArrivee, couleur);
    });
  }

  /**
   * Recherche une route à partir du nom (sous la forme "Ville1 - Ville2")
   * @param {string} nomRoute
   * @returns {Route|null}
   */
  rechercheRoute(nomRoute) {
    if (!this.routes) return null;
    return this.routes.find(r => r.getNom() === nomRoute) || null;
  }
}
