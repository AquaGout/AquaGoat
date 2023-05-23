
export const Playnow = () => {
  // Cargar el contenido del archivo header.html
  fetch("./components/Playnow/Playnow.html")
    .then(response => response.text())
    .then(html => {
      // Insertar el contenido del archivo en el elemento con el id "header"
      document.getElementById("Playnow").innerHTML = html;
    });

  // mas javascript
  console.log("Playnow");
};
