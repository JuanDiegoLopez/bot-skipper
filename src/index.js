(function () {
  const fjs = document.getElementsByTagName('script')[0];
  const js = document.createElement('script');
  js.src = `./redirect.js?t=${Date.now()}`;
  js.type = 'module';

  fjs.parentNode.insertBefore(js, fjs);
})();
