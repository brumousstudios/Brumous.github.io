/* ============================================================
   components.js
   Loads shared nav and footer into every page.
   Active nav link is set automatically based on current URL.
   ============================================================ */

(function () {

  // ── Inject nav ──────────────────────────────────────────────
  var navEl = document.getElementById('nav-placeholder');
  if (navEl) {
    fetch('/nav.html')
      .then(function(r) { return r.text(); })
      .then(function(html) {
        navEl.innerHTML = html;
        setActiveLink();
      })
      .catch(function(e) { console.warn('Nav load failed:', e); });
  }

  // ── Inject footer ────────────────────────────────────────────
  var footerEl = document.getElementById('footer-placeholder');
  if (footerEl) {
    fetch('/footer.html')
      .then(function(r) { return r.text(); })
      .then(function(html) {
        footerEl.innerHTML = html;
      })
      .catch(function(e) { console.warn('Footer load failed:', e); });
  }

  // ── Set active nav link ──────────────────────────────────────
  function setActiveLink() {
    var path = window.location.pathname;
    var links = document.querySelectorAll('.nav-links a');

    links.forEach(function(link) {
      var linkPath = new URL(link.href).pathname;

      // Exact match
      if (path === linkPath) {
        link.classList.add('active');
        return;
      }

      // Blog section — mark active for any /blog/ URL
      if (linkPath === '/blog/' && path.indexOf('/blog/') === 0) {
        link.classList.add('active');
        return;
      }
    });
  }

})();
