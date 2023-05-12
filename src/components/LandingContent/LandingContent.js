/* Se carga todo JS y su funcionalidad */
/* Primero se crea una funcion global para insertar el componente  */
export const LandingContent = () => {
  // Cargar el contenido del archivo header.html
  fetch("./components/LandingContent/LandingContent.html")
    .then(response => response.text())
    .then(html => {
      // Insertar el contenido del archivo en el elemento con el id "header"
      document.getElementById("landingContent").innerHTML = html;
    });

  // mas javascript
  console.log("LandingContent");
};
