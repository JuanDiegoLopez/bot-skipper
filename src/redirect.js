(async function () {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const url = data[id];

    if (url) {
      window.location.href = url;
    } else {
      alert('URL not found!');
    }
  } catch (error) {
    console.log(error);
  }
})();
