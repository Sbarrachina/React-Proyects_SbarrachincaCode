import { SiAdobexd } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";

const data = [
  {
    id: 1,
    icon: <SiAdobexd />,
    title: "UI/UX Design",
    desc: "Diseños modernos e intuitivos y responsivas para diferentes dispositivos.",
  },
  {
    id: 2,
    icon: <RiReactjsLine />,
    title: "Frontend Development",
    desc: "Utilización de las tecnologías (HTML, CSS, JavaScript) y los frameworks más destacado como (Angular, React, Vue) y otros como (jQuery)",
  },
  {
    id: 3,
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Utilización de las tecnologías (PHP) y los frameworks como (Ruby on Rails, NodeJs) y de uso de base de datos (relacionadas: MySQL, no relacionadas: MongoDB)",
  },
  {
    id: 4,
    icon: <AiFillAppstore />,
    title: "App Development",
    desc: "Utilización de las tecnologías (Android con Java  y iOS con Swift)",
  },
];

export default data;
