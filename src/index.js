const sitekey = '6LcUfwklAAAAAK8W9dC1MjYOvxl14Smzb_zc1bId';

function validateCaptcha(token) {
  if (token) {
    const fjs = document.getElementsByTagName('script')[0];
    const js = document.createElement('script');
    js.src = `./redirect.js?t=${Date.now()}`;
    js.type = 'module';

    fjs.parentNode.insertBefore(js, fjs);
  }
}

function init() {
  const container = document.getElementById('root');
  const parameters = {
    sitekey,
    callback: 'validateCaptcha',
  };

  grecaptcha.render(container, parameters);
}
