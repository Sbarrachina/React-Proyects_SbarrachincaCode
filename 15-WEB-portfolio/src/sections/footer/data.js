import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "Acerca de mí" },
  { id: 3, link: "#services", title: "Habilidades" },
  //   { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 4, link: "#contact", title: "Contacto" },
];

export const socials = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/sandra-barrachina-00569630/",
    icon: <AiFillLinkedin />,
  },
  { id: 2, link: "https://github.com/Sbarrachina", icon: <AiFillGithub /> },
];
