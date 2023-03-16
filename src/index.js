(async function () {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();
    const params = new URLSearchParams(window.location.search);
    const model = params.get('model');
    const url = data[model];

    if (url) {
      window.location.href = url;
    } else {
      history.back();
    }
  } catch (error) {
    console.log(error);
  }
})();
