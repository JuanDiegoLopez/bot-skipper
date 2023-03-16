import data from './data.json' assert { type: 'json' };

(function () {
  const params = new URLSearchParams(window.location.search);
  const model = params.get('model');
  const url = data[model];

  if (url) {
    window.location.href = url;
  }
})();
