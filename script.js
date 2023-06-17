const API_KEY = "KeBXtifXktQ3InRxxpNpljcFgpgGfaC2";

const img = document.querySelector("img");
const input = document.querySelector("input");
const button = document.querySelector("button");

async function getData(query) {
  const encoded = encodeURIComponent(`cat ${query}`);

  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${encoded}`);

  return resp.json();
}

function onButton() {
  getData(input.value)
    .then(function (obj) {
      img.src = obj.data.images.original.url;
    });
}

button.addEventListener("click", onButton);
