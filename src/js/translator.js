class Translator {
  constructor() {
    this.currentLanguage = null;
    this.translations = {};
    this.originalTemplates = new Map();
    this.templateRegex = /\{\{([^}]+)\}\}/g;
  }

  async init() {
    this.storeOriginalTemplates();
    const browserLang = navigator.language.split('-')[0];
    await this.load(browserLang);
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

  async load(language) {
    try {
      const response = await fetch(`/i18n/${language}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load ${language}.json`);
      }

      this.translations = await response.json();
      this.currentLanguage = language;
      this.applyTranslations();
      this.updateHtmlLang();
    } catch (error) {
      console.warn(
        `Translation file for ${language} not found, falling back to en`
      );
      if (language !== 'en') {
        await this.load('en');
      }
    }
  }

  applyTranslations() {
    this.originalTemplates.forEach((originalText, node) => {
      const translatedText = this.translateText(originalText);
      node.textContent = translatedText;
    });

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((element) => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getNestedValue(this.translations, key);
      if (translation) {
        element.textContent = translation;
      }
    });

    // Handle placeholder translations
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach((element) => {
      const key = element.getAttribute('data-i18n-placeholder');
      const translation = this.getNestedValue(this.translations, key);
      if (translation) {
        element.placeholder = translation;
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

    const dataI18nElements = element.querySelectorAll('[data-i18n]');
    dataI18nElements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const translation = this.getNestedValue(this.translations, key);
      if (translation) {
        el.textContent = translation;
      }
    });

    const placeholderElements = element.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = this.getNestedValue(this.translations, key);
      if (translation) {
        el.placeholder = translation;
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
