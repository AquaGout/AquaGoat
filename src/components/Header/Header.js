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

  // mas javascript
  console.log("Component Header");
};
