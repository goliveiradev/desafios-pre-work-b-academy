import './style.css'

const app = document.querySelector('[data-js="app"]');

const link = document.querySelector('[data-js="link"]');
link.addEventListener('click', (event) => {
  if (app.style.visibility === "hidden")
    app.style.visibility = "visible";
  else
    app.style.visibility = "hidden";
}, false);