/* Se carga todo JS y su funcionalidad */
/* Primero se crea una funcion global para insertar el componente  */
export const Header = () => {
  // Cargar el contenido del archivo header.html
  fetch("./components/Header/Header.html")
    .then(response => response.text())
    .then(html => {
    // Insertar el contenido del archivo en el elemento con el id "header"
      document.getElementById("header").innerHTML = html;
    });

  // Rutas del Header (navbar!)
  // creamos evento click propagacion.
  document.addEventListener("click", function (event) {
    event.preventDefault();
    // comparamos si evento es el boton home
    if (event.target.matches("#homeLink")) {
      fetch("./components/LandingContent/LandingContent.html")
        .then(response => response.text())
        .then(htmlHome => {
          // Insertar el contenido del archivo en el elemento con el id "header"
          document.getElementById("content").innerHTML = htmlHome;
        });
    }
    // comparamos si evento es el boton howToPlay
    if (event.target.matches("#howToPlay")) {
      fetch("./components/HowtoPlay/HowtoPlay.html")
        .then(response => response.text())
        .then(htmlHowtoPlay => {
          // Insertar el contenido del archivo en el elemento con el id "header"
          document.getElementById("content").innerHTML = htmlHowtoPlay;
        });
    }
    if (event.target.matches("#Share")) {
      fetch("./components/Share/Share.html")
        .then(response => response.text())
        .then(htmlShare => {
          // Insertar el contenido del archivo en el elemento con el id "header"
          document.getElementById("content").innerHTML = htmlShare;
        });
    }
    if (event.target.matches("#PlayNow")) {
      fetch("./components/PlayNow/PlayNow.html")
        .then(response => response.text())
        .then(htmlPlayNow => {
          // Insertar el contenido del archivo en el elemento con el id "header"
          document.getElementById("content").innerHTML = htmlPlayNow;
        });
    }
  });

  // mas javascript
  console.log("Component Header");
};
