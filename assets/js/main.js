/* Portfólio de Danilo Silveira Ramos: troca de idioma (PT/EN) */
(function () {
  var root = document.documentElement;
  var KEY = 'portfolio-lang';
  var TITLES = {
    'pt-BR': 'Danilo Silveira Ramos | Portfólio',
    en: 'Danilo Silveira Ramos | Portfolio'
  };

  function applyLang(lang, save) {
    if (lang !== 'en') lang = 'pt-BR';
    root.lang = lang;
    document.title = TITLES[lang];

    // Atributos traduzidos (alt, aria-label): data-attr="alt" data-pt="..." data-en="..."
    var els = document.querySelectorAll('[data-attr]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var value = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-pt');
      if (value !== null) el.setAttribute(el.getAttribute('data-attr'), value);
    }

    var buttons = document.querySelectorAll('[data-set-lang]');
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].setAttribute('aria-pressed', String(buttons[j].getAttribute('data-set-lang') === lang));
    }

    if (save) {
      try { localStorage.setItem(KEY, lang); } catch (e) { /* armazenamento indisponível */ }
    }
  }

  // O script no <head> já definiu o idioma inicial; aqui só sincronizamos o resto.
  applyLang(root.lang, false);

  var langButtons = document.querySelectorAll('[data-set-lang]');
  for (var k = 0; k < langButtons.length; k++) {
    langButtons[k].addEventListener('click', function () {
      applyLang(this.getAttribute('data-set-lang'), true);
    });
  }
})();
