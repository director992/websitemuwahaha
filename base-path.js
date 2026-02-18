/**
 * Sets the correct base path for images and assets.
 * Works for: local files, GitHub Pages user sites, GitHub Pages project sites.
 * Must load first in <head> before any images or stylesheets.
 */
(function() {
  try {
    var path = location.pathname || '/';
    var base;
    if (path === '/' || path === '') {
      base = '/';
    } else if (path.endsWith('/')) {
      base = path;
    } else if (path.lastIndexOf('/') <= 0) {
      base = '/';
    } else {
      base = path.substring(0, path.lastIndexOf('/') + 1);
    }
    var tag = document.createElement('base');
    tag.href = base;
    if (document.head.firstChild) {
      document.head.insertBefore(tag, document.head.firstChild);
    } else {
      document.head.appendChild(tag);
    }
  } catch (e) {
    var fallback = document.createElement('base');
    fallback.href = './';
    document.head.insertBefore(fallback, document.head.firstChild);
  }
})();
