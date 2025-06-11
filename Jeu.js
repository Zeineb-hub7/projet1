class Jeu {
  constructor(joueurs = []) {
    this.plateau = new Plateau();
    this.ihm = new IHM();
    this.indiceJoueurCourant = 0;
    this.joueurs = joueurs;
  }

  getPlateau() {
    return this.plateau;
  }

  getJoueurs() {
    return this.joueurs;
  }

  getJoueurCourant() {
    return this.joueurs[this.indiceJoueurCourant];
  }

  creeJoueurs(nombreJoueurs) {
    this.joueurs = new Array(nombreJoueurs);
    for (let i = 0; i < nombreJoueurs; i++) {
      this.joueurs[i] = new Joueur(i, Donnees.COULEURS_JOUEUR[i]);
    }
    this.indiceJoueurCourant = 0;
  }

  changeJoueur() {
    this.indiceJoueurCourant = (this.indiceJoueurCourant + 1) % this.joueurs.length;
  }

  affichePlateau() {
    this.ihm.afficheFenetre("Les Aventuriers du Rail", 1366, 768, "lightGray");
    this.plateau.getEtats().forEach(e => {
      this.ihm.dessineEtat(e);
    });
  }

  afficheJoueurCourant() {
    const info = "Joueur courant : " + this.indiceJoueurCourant;
    this.ihm.afficheInformation(info, 100, 30, true);
  }

  demandeAction() {
    this.ihm.effaceBoutons();
    this.ihm.dessineBoutonSuivant(false);
    const reponse = this.ihm.attenteActionJoueur();
    switch (reponse.getType()) {
      case "FINTOUR":
        this.changeJoueur();
        this.afficheJoueurCourant();
        break;
      default:
        break;
    }
  }

  static main() {
    const jeu = new Jeu();
    jeu.affichePlateau();
  }
}
