import Card from "../../components/Card";
import data from "./data";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h2>Mis habilidades</h2>
      <p>Tengo conocimientos y experiencia en:</p>
      <div className="container services__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
