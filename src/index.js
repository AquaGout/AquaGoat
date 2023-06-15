/* Se cargan todos los componentes de JS que se hagan */
/* import { Header } from "./components/Header/Header.js";
import { Footer } from "./components/Footer/Footer.js";
import { LandingContent } from "./components/LandingContent/LandingContent.js";
 */
/* Se inicializa cada componente JS */
/* Header();
LandingContent();
Footer();
 */

$(document).ready(function () {
  $(".slick-carousel").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });
});
