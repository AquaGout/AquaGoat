import { Playnow } from "../PlayNow/PlayNow";
/* Se carga todo JS y su funcionalidad */
/* Primero se crea una funcion global para insertar el componente  */
export const Header = () => {
  // Cargar el contenido del archivo header.html
  fetch("./components/Header/Header.html")
    .then((response) => response.text())
    .then((html) => {
      // Insertar el contenido del archivo en el elemento con el id "header"
      document.getElementById("header").innerHTML = html;
    });

  // Rutas del Header (navbar!)
  // creamos evento click propagacion.
  document.addEventListener("click", function (event) {
    event.preventDefault();

    // RUTA HOME
    if (event.target.matches("#homeLink")) {
      fetch("./components/LandingContent/LandingContent.html")
        .then((response) => response.text())
        .then((htmlHome) => {
          // Insertar el contenido del archivo en el elemento con el id "header"
          document.getElementById("content").innerHTML = htmlHome;
        });
    }

    // RUTA HOWTOPLAY
    if (event.target.matches("#howToPlay")) {
      fetch("./components/HowtoPlay/HowtoPlay.html")
        .then((response) => response.text())
        .then((htmlHowtoPlay) => {
          // Insertar el contenido del archivo en el elemento con el id "header"
          document.getElementById("content").innerHTML = htmlHowtoPlay;
        });
    }

    // RUTA SHARE
    if (event.target.matches("#Share")) {
      fetch("./components/Share/Share.html")
        .then((response) => response.text())
        .then((htmlShare) => {
          // Insertar el contenido del archivo en el elemento con el id "header"
          document.getElementById("content").innerHTML = htmlShare;
        });
    }

    // RUTA DE PLAYNOW
    if (event.target.matches("#PlayNow")) {
      // se carga el javascript de playnow donde esta la ruta y funcionalida del juego
      Playnow();

      const navigationHeader = document.querySelector(".navigation");
      const footerContainer = document.getElementById("footer");
      navigationHeader.style.display = "none";
      footerContainer.style.display = "none";
    }
  });
  // Get the shareLink element
  const shareLink = document.getElementById("Share");
  
  // Get the modal and close button elements
  const modal = document.getElementById("modal");
  const closeButton = document.getElementsByClassName("close")[0];
  
  // Add a click event listener to the shareLink element
  shareLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
  
    // Display the modal
    modal.style.display = "block";
  });
  
  // Add a click event listener to the close button
  closeButton.addEventListener("click", function () {
    // Hide the modal
    modal.style.display = "none";
  });
};
