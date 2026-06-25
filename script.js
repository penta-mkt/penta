/* =========================================================
   PENTA — Estudio creativo · JavaScript (sin dependencias)
   1. Tema claro / oscuro (persistente)
   2. Header al scrollear
   3. Menú mobile
   4. Scroll reveal
   5. Carruseles de apoyo visual (video / imagen)
   6. Acordeón de disciplinas
   7. Año dinámico
   ========================================================= */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js'); // habilita el modo acordeón (colapsado por defecto)

  /* ---------- 1. TEMA ---------- */
  var themeToggle = document.getElementById('themeToggle');
  var saved = null;
  try { saved = localStorage.getItem('penta-theme'); } catch (e) {}
  if (saved) root.setAttribute('data-theme', saved);
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('penta-theme', next); } catch (e) {}
    });
  }

  /* ---------- 1b. IDIOMA ES / EN ---------- */
  var langToggle = document.getElementById('langToggle');
  var i18nNodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var ES = {};
  i18nNodes.forEach(function (n) { ES[n.dataset.i18n] = n.innerHTML; });

  var EN = {
    'nav-disc': 'Disciplines', 'nav-studio': 'Studio', 'nav-method': 'Method', 'nav-cta': "Let's talk", 'footer-contact': 'Contact',
    'hero-eyebrow': 'Multidisciplinary creative studio',
    'hero-title': 'We build brands<br />that leave a <span class="huella">mark.</span>',
    'hero-sub': 'Branding, marketing, audiovisual, 3D, events and content. Five disciplines, one signature: people.',
    'hero-cta1': 'Start a project', 'hero-cta2': 'See the work', 'scroll': 'Scroll',
    'disc-eyebrow': 'Disciplines &amp; work', 'disc-title': 'Five worlds,<br />one studio.',
    'd1-name': 'Marketing Strategy &amp; Growth',
    'd1-desc': "It's not just about communicating: it's about building a clear direction. We design strategies that connect each brand's business goals with campaigns, content and actions built to grow, position and deliver measurable results.",
    'd1-serv': '<li>Brand audit</li><li>Communication strategy</li><li>Positioning</li><li>Business planning</li><li>Integrated campaigns</li><li>Content strategy</li><li>Paid media</li><li>Meta Ads</li><li>LinkedIn Ads</li><li>Email marketing</li><li>Mercado Libre Ads</li><li>Pinterest Ads</li><li>Metrics analysis</li><li>Campaign optimization</li><li>Performance reports</li><li>Customer journey</li><li>Launch strategy</li><li>Marketing consulting</li>',
    'd2-name': 'Branding &amp; Creative Direction',
    'd2-desc': 'A brand is much more than a logo. We build visual identities with personality, criteria and consistency, able to tell a story, stand out in the market and hold up across every touchpoint.',
    'd2-serv': '<li>Brand audit</li><li>Brand strategy</li><li>Naming</li><li>Big idea</li><li>Creative concept</li><li>Visual identity</li><li>Logo design</li><li>Graphic system</li><li>Color palette</li><li>Typography</li><li>Brand guidelines</li><li>Art direction</li><li>Corporate design</li><li>Social media design</li><li>Digital assets</li><li>Sales presentations</li><li>Merchandising</li><li>Brand applications</li>',
    'd3-name': 'Design &amp; Audiovisual Content',
    'd3-desc': "We create visual content designed to grab attention, communicate clearly and boost every brand's presence across social, campaigns, events and digital platforms.",
    'd3-serv': '<li>Audiovisual production</li><li>Corporate videos</li><li>Social media content</li><li>Motion graphics</li><li>2D animation</li><li>3D animation</li><li>3D modeling</li><li>Post-production</li><li>Video editing</li><li>Sound design</li><li>Campaign pieces</li><li>Screen content</li><li>Event videos</li><li>Advertising videos</li><li>Product content</li><li>Visual storytelling</li>',
    'd4-name': 'Events &amp; Activations',
    'd4-desc': 'We turn ideas into real experiences. We design, produce and run brand activations, launches and events that blend creativity, full production and tech solutions.',
    'd4-serv': '<li>Corporate events</li><li>Brand launches</li><li>BTL activations</li><li>Booths</li><li>Interactive experiences</li><li>Full production</li><li>Creative event direction</li><li>Visual concept design</li><li>Vendor coordination</li><li>Event content</li><li>Tech installations</li><li>Activation games</li><li>Participation dynamics</li><li>Promotional actions</li><li>Fair &amp; expo experiences</li>',
    'd5-name': 'Web &amp; Digital Ecosystem',
    'd5-desc': "We design websites and digital platforms that don't just look good, but also organize communication, present services, capture opportunities and strengthen every brand's online presence.",
    'd5-serv': '<li>Corporate websites</li><li>Landing pages</li><li>E-commerce</li><li>UX/UI</li><li>Web design</li><li>Web content</li><li>Copywriting</li><li>Visual optimization</li><li>Information architecture</li><li>Commercial sections</li><li>Project showcase</li><li>Social integration</li><li>Contact forms</li><li>Web maintenance</li><li>Content updates</li><li>Campaign optimization</li>',
    'studio-eyebrow': 'The studio',
    'studio-statement': 'PENTA is more than<br />a name.',
    'studio-lead': 'Penta is five: five disciplines, five ways to build a brand. And one constant at the center of them all: people.',
    'studio-muted': 'We are the meeting point between identity and business, between creativity and results, between the digital and the human. That is why our symbol is a fingerprint: unique, unrepeatable, impossible to copy. Like every brand that passes through our hands.',
    'values': '<span>Radical transparency</span><span>Real empathy</span><span>Applied innovation</span><span>Strategic creativity</span><span>Narrative consistency</span>',
    'method-eyebrow': 'How we work',
    'method-title': 'From idea<br />to result.',
    'steps': '<div class="step reveal is-visible"><span class="step-num">01</span><h3>Discovery</h3><p>We get your brand, your market and your numbers. Where you really stand.</p></div><div class="step reveal is-visible"><span class="step-num">02</span><h3>Strategy</h3><p>We set goals, messages and channels. A focused plan.</p></div><div class="step reveal is-visible"><span class="step-num">03</span><h3>Creation</h3><p>We design and produce. Brand, content, audiovisual, experiences.</p></div><div class="step reveal is-visible"><span class="step-num">04</span><h3>Execution</h3><p>We take it to the street and the screen, consistent at every point.</p></div><div class="step reveal is-visible"><span class="step-num">05</span><h3>Optimization</h3><p>We measure, adjust and improve. Growth you can see.</p></div>',
    'clients-eyebrow': 'Trusted by',
    'cta-eyebrow': "Let's talk",
    'cta-title': 'Ready to leave<br />your mark?',
    'cta-sub': "Tell us about your project and we'll get back with a concrete proposal. No fuss.",
    'footer-tagline': 'Brands that leave a mark.',
    'footer-copy': '© <span id="year"></span> PENTA. Creative studio.'
  };

  function fillYear() { var yy = document.getElementById('year'); if (yy) yy.textContent = new Date().getFullYear(); }

  function applyLang(l) {
    i18nNodes.forEach(function (n) {
      var k = n.dataset.i18n, val = l === 'en' ? EN[k] : ES[k];
      if (val != null) n.innerHTML = val;
      var rv = n.querySelectorAll('.reveal');
      for (var x = 0; x < rv.length; x++) rv[x].classList.add('is-visible');
    });
    root.setAttribute('lang', l);
    if (langToggle) {
      langToggle.textContent = l === 'en' ? 'ES' : 'EN';
      langToggle.setAttribute('aria-label', l === 'en' ? 'Cambiar idioma a español' : 'Switch language to English');
    }
    fillYear();
  }

  var lang = 'es';
  try { lang = localStorage.getItem('penta-lang') || 'es'; } catch (e) {}
  applyLang(lang);
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      lang = lang === 'en' ? 'es' : 'en';
      applyLang(lang);
      try { localStorage.setItem('penta-lang', lang); } catch (e) {}
    });
  }

  /* ---------- 2. HEADER AL SCROLLEAR ---------- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (window.scrollY > 24) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 3. MENÚ MOBILE ---------- */
  var menuToggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');
  function closeMenu() {
    if (!nav) return;
    nav.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  }

  /* ---------- 4. SCROLL REVEAL ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); ro.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(function (el) { ro.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- 5. CARRUSELES (con control start/stop) ---------- */
  function initCarousel(car) {
    var stage = car.querySelector('.car-stage');
    var slides = Array.prototype.slice.call(stage.querySelectorAll('.car-slide'));
    if (!slides.length) return null;

    var dotsWrap = car.querySelector('.car-dots');
    var prev = car.querySelector('.car-arrow.prev');
    var nextBtn = car.querySelector('.car-arrow.next');
    var soundBtn = car.querySelector('.car-sound');
    var idx = 0, timer = null, active = false, muted = true;
    var IMG_DUR = 5, VID_CAP = 9;

    var dots = slides.map(function (s, i) {
      var d = document.createElement('button');
      d.className = 'car-dot';
      d.setAttribute('aria-label', 'Item ' + (i + 1));
      d.addEventListener('click', function () { go(i); });
      dotsWrap.appendChild(d);
      return d;
    });
    if (slides.length < 2) {
      if (prev) prev.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      if (dotsWrap) dotsWrap.style.display = 'none';
    }

    function clearVid(s) {
      var v = s.querySelector('video');
      if (v) { v.pause(); v.removeAttribute('src'); v.load(); v.remove(); }
    }

    function arm() {
      if (timer) { clearTimeout(timer); timer = null; }
      var s = slides[idx];
      if (s.dataset.video) {
        var v = s.querySelector('video');
        if (!v) {
          v = document.createElement('video');
          v.muted = muted; v.playsInline = true;
          v.setAttribute('playsinline', ''); v.setAttribute('webkit-playsinline', '');
          v.preload = 'auto'; v.loop = (slides.length < 2);
          v.src = s.dataset.video;
          s.appendChild(v);
        }
        v.muted = muted;
        try { v.currentTime = 0; } catch (e) {}
        if (slides.length > 1) {
          var begin = function () {
            var dur = isFinite(v.duration) && v.duration > 0 ? Math.min(v.duration, VID_CAP) : VID_CAP;
            timer = setTimeout(nextSlide, dur * 1000);
          };
          if (v.readyState >= 1) begin();
          else v.addEventListener('loadedmetadata', begin, { once: true });
        }
        var p = v.play(); if (p && p.catch) p.catch(function () {});
      } else {
        timer = setTimeout(nextSlide, IMG_DUR * 1000);
      }
    }

    function show(i) {
      slides[idx].classList.remove('is-active');
      if (dots[idx]) dots[idx].classList.remove('is-active');
      if (i !== idx) clearVid(slides[idx]);
      idx = i;
      slides[idx].classList.add('is-active');
      if (dots[idx]) dots[idx].classList.add('is-active');
      if (active) arm();
    }
    function go(i) { if (timer) clearTimeout(timer); show((i + slides.length) % slides.length); }
    function nextSlide() { go(idx + 1); }

    if (prev) prev.addEventListener('click', function () { go(idx - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { go(idx + 1); });
    if (soundBtn) {
      soundBtn.addEventListener('click', function () {
        muted = !muted;
        soundBtn.classList.toggle('is-on', !muted);
        soundBtn.setAttribute('aria-label', muted ? 'Activar sonido' : 'Silenciar');
        var v = slides[idx].querySelector('video');
        if (v) { v.muted = muted; if (!muted) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } }
      });
    }

    slides[0].classList.add('is-active');
    if (dots[0]) dots[0].classList.add('is-active');

    return {
      start: function () { if (active) return; active = true; arm(); },
      stop: function () { active = false; if (timer) clearTimeout(timer); clearVid(slides[idx]); }
    };
  }

  /* ---------- 6. DISCIPLINAS: DESPLIEGUE AUTOMÁTICO POR SCROLL ---------- */
  var discs = Array.prototype.slice.call(document.querySelectorAll('.dsc'));
  var ctrls = discs.map(function (d) {
    var c = d.querySelector('.carousel');
    return c ? initCarousel(c) : null;
  });

  function openDisc(i) {
    var d = discs[i];
    d.classList.add('is-open');
    var head = d.querySelector('.dsc-head');
    if (head) head.setAttribute('aria-expanded', 'true');
    if (ctrls[i]) ctrls[i].start();
  }

  if ('IntersectionObserver' in window) {
    var dio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var i = discs.indexOf(en.target);
        if (i < 0) return;
        if (en.isIntersecting) openDisc(i);   // se despliega al entrar y queda abierta
        else if (ctrls[i]) ctrls[i].stop();   // pausa el carrusel al salir (no se cierra)
      });
    }, { rootMargin: '0px 0px -28% 0px', threshold: 0.2 });
    discs.forEach(function (d) { dio.observe(d); });
  } else {
    discs.forEach(function (d, i) { openDisc(i); });
  }

  /* ---------- 7. CINTA DE MARCAS (separadores + loop continuo) ---------- */
  var mqTrack = document.querySelector('.marquee-track');
  if (mqTrack) {
    var mqItems = Array.prototype.slice.call(mqTrack.querySelectorAll('.logo-item'));
    mqItems.forEach(function (img) {
      var s = document.createElement('span');
      s.className = 'mq-sep';
      img.parentNode.insertBefore(s, img.nextSibling);
    });
    mqTrack.innerHTML += mqTrack.innerHTML;
  }

})();
