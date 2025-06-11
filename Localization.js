class Localization {
  static KEY_PREFIX = '@@';
  static LOCALE_BUNDLE_NAME = 'controlsfx'; // Utilisé uniquement à titre indicatif
  static locale = null;
  static resourceBundleLocale = null;
  static resourceBundle = null;

  // Un dictionnaire de traductions simulé
  static bundles = {
    'en': {
      greeting: "Hello",
      farewell: "Goodbye"
    },
    'fr': {
      greeting: "Bonjour",
      farewell: "Au revoir"
    }
    // On peut ajouter d'autres langues ici
  };

  static getLocale() {
    return Localization.locale || navigator.language || 'en';
  }

  static setLocale(newLocale) {
    Localization.locale = newLocale;
    Localization.resourceBundleLocale = null; // force le rechargement du bundle
  }

  static getLocaleBundle() {
    const currentLocale = Localization.getLocale().split('-')[0]; // ex: 'fr-FR' -> 'fr'
    if (currentLocale !== Localization.resourceBundleLocale) {
      Localization.resourceBundleLocale = currentLocale;
      Localization.resourceBundle = Localization.bundles[currentLocale] || {};
    }
    return Localization.resourceBundle;
  }

  static getString(key) {
    const bundle = Localization.getLocaleBundle();
    return bundle[key] || `<${key}>`;
  }

  static asKey(text) {
    return Localization.KEY_PREFIX + text;
  }

  static isKey(text) {
    return typeof text === 'string' && text.startsWith(Localization.KEY_PREFIX);
  }

  static localize(text) {
    if (Localization.isKey(text)) {
      return Localization.getString(text.slice(Localization.KEY_PREFIX.length).trim());
    } else {
      return text;
    }
  }
}
