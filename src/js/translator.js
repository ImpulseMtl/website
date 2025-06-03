class Translator {
  constructor() {
    this.currentLanguage = null;
    this.translations = {};
    this.originalTemplates = new Map();
    this.templateRegex = /\{([^}]+)\}/g;
    this.availableTranslations = {};
  }

  async init() {
    this.loadTranslations();
    this.storeOriginalTemplates();
    const browserLang = navigator.language.split('-')[0];
    this.load(browserLang);
  }

  loadTranslations() {
    if (typeof en !== 'undefined') {
      this.availableTranslations.en = en;
    }
    if (typeof fr !== 'undefined') {
      this.availableTranslations.fr = fr;
    }
  }

  storeOriginalTemplates() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    let node;
    while ((node = walker.nextNode())) {
      if (this.templateRegex.test(node.textContent)) {
        this.originalTemplates.set(node, node.textContent);
      }
    }
  }

  load(language) {
    if (this.availableTranslations[language]) {
      this.translations = this.availableTranslations[language];
      this.currentLanguage = language;
      this.applyTranslations();
      this.updateHtmlLang();
    } else {
      console.warn(
        `Translation file for ${language} not found, falling back to en`
      );
      if (language !== 'en' && this.availableTranslations.en) {
        this.load('en');
      }
    }
  }

  applyTranslations() {
    this.originalTemplates.forEach((originalText, node) => {
      const translatedText = this.translateText(originalText);
      node.textContent = translatedText;
    });

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    let node;
    while ((node = walker.nextNode())) {
      if (this.templateRegex.test(node.textContent)) {
        const translatedText = this.translateText(node.textContent);
        node.textContent = translatedText;
      }
    }

    const inputElements = document.querySelectorAll(
      'input[placeholder], textarea[placeholder]'
    );
    inputElements.forEach((element) => {
      if (this.templateRegex.test(element.placeholder)) {
        const translatedPlaceholder = this.translateText(element.placeholder);
        element.placeholder = translatedPlaceholder;
      }
    });
  }

  translateText(text) {
    return text.replace(this.templateRegex, (match, key) => {
      const translation = this.getNestedValue(this.translations, key.trim());
      return translation || match;
    });
  }

  getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : null;
    }, obj);
  }

  updateHtmlLang() {
    document.documentElement.lang = this.currentLanguage;
  }

  translateDynamicContent(element) {
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    let node;
    while ((node = walker.nextNode())) {
      if (this.templateRegex.test(node.textContent)) {
        this.originalTemplates.set(node, node.textContent);
        const translatedText = this.translateText(node.textContent);
        node.textContent = translatedText;
      }
    }

    const inputElements = element.querySelectorAll(
      'input[placeholder], textarea[placeholder]'
    );
    inputElements.forEach((el) => {
      if (this.templateRegex.test(el.placeholder)) {
        const translatedPlaceholder = this.translateText(el.placeholder);
        el.placeholder = translatedPlaceholder;
      }
    });
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  getAvailableLanguages() {
    return ['en', 'fr'];
  }
}

window.Translator = Translator;
