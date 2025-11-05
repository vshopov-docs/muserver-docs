/* out/nav.js */
(function () {
  function inject() {
    var aside = document.getElementById('nav');
    if (!aside) return;
    fetch('nav.html')
      .then(function (r) { return r.text(); })
      .then(function (html) {
        aside.innerHTML = html;
        // Highlight current page
        var here = location.pathname.split('/').pop() || 'index.html';
        var links = aside.querySelectorAll('a[href]');
        links.forEach(function (a) {
          var href = a.getAttribute('href');
          if (href === here) a.classList.add('active');
        });
      })
      .catch(function () {
        aside.innerHTML = '<div class="nav-error">Navigation unavailable</div>';
      });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
