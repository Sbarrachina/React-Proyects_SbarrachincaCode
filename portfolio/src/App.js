import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
// import Portfolio from "./sections/portfolio/Portfolio";
// import Testimonials from "./sections/testimonials/Testimonials";
import FAQs from "./sections/faqs/FAQs";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context";
import { useRef, useState, useEffect } from "react";

// Componente principal de la página web
const App = () => {
  // Obtener el estado del tema actual
  const { themeState } = useThemeContext();

  // Crear una referencia al elemento principal
  const mainRef = useRef();

  // Inicializar el estado de la variable showFloatingNav como verdadero
  const [showFloatingNav, setShowFloatingNav] = useState(true);

  // Inicializar el estado de la variable siteYPosition como 0
  const [siteYPostion, setSiteYPosition] = useState(0);

  // Función para mostrar la navegación flotante
  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  // Función para ocultar la navegación flotante
  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  // Función para alternar la navegación flotante en función de la posición Y actual del elemento principal
  const floatingNavToggleHandler = () => {
    // Comprueba si la posición Y actual del elemento principal es más de 20 píxeles diferente a la posición Y anterior
    if (
      siteYPostion < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPostion > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      // Si la diferencia es más de 20 píxeles, mostrar la navegación flotante
      showFloatingNavHandler();
    } else {
      // Si la diferencia es inferior a 20 píxeles, oculta la navegación flotante
      hideFloatingNavHandler();
    }

    // Establece la posición Y actual del elemento principal como el nuevo siteYPosition
    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  };

  // Usa el hook useEffect para crear un intervalo que ejecute la función floatNavToggleHandler cada 2 segundos
  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // Devuelve una función limpiar para borrar el intervalo cuando el componente se desmonta
    return () => clearInterval(checkYPosition);
  }, [siteYPostion]);

  // Imprime el elemento principal con el estado del tema actual
  return (
    <main
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      <Navbar />
      <Header />
      <About />
      <Services />
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      {/* <FAQs /> */}
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
