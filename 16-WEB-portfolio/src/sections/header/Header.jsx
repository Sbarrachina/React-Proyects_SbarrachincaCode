import { useEffect } from "react";
import HeaderImage from "../../assets/header.png";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Inicializar la biblioteca AOS con una duración de 2s
  }, []); // El hook useEffect se llama con una matriz vacía como segundo argumento, lo que significa que solo se ejecutará una vez cuando el componente se monte

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos="fade-up">Sandra Barrachina</h3>
        <p data-aos="fade-up">
          <i>
            "Un buen desarrollador de sofware trabaja con esfuerzo y
            constancia desde el primer día y sin perder la ilusión"
          </i>
         
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Contáctame
          </a>
          {/* <a href="#portfolio" className="btn light">
            My Work
          </a> */}
        </div>
        <div className="header__socials">
          {/* Haz un mapa sobre la matriz de datos para representar una lista de íconos de redes sociales como enlaces */}
          {data.map((item) => (
            <a
              key={item.id} // Usa la identificación del artículo como la clave para la lista
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
