import AboutImage from "../../assets/about.jpeg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>Acerca de mí</h2>
         
          <p>
          Me llamo Sandra Barrachina. Soy diplomada en Montaje , Postproducción y sonido en cine y ahora también Desarrolladora Web tras finalizar un bootcamp de programación Full Stack.

          ¿Qué puedo aportar?

          Entusiasmo, seriedad, confianza y conocimientos. Los que han trabajado conmigo han confiado y resaltado mi profesionalidad.

          Implicada en cada proyecto,instruirme todo lo necesario para rendir al máximo. Motivar a la gente que me rodea con mi entusiasmo a base de trabajo duro y constante.

          Responsable y creativa en todo lo que hago. Nunca sé lo suficiente porque siempre tengo en mente seguir mejorando. Saber escuchar y comprender, para luego encontrar la mejor solución a los problemas que puedan surgir en cada proyecto, acuden a mi para resolverlos.
          </p>
          <a href={CV} download className="btn primary">
            Descargar CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
