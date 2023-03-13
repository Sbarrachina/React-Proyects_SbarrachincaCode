import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'
const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Nesciunt rem quidem illum labore voluptas neque officia nulla
        quae! Placeat, porro.
    </Header>
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Obcaecati quasi adipisci, nostrum unde repellat cumque id 
             perspiciatis itaque! Modi commodi nihil exercitationem,
              assumenda dolores illo accusantium iste enim voluptatibus
               quibusdam labore minima. Voluptas quaerat iusto aliquam,
                totam molestiae deleniti commodi.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  At quaerat, voluptates, sapiente deleniti maiores corrupti 
                  obcaecati esse veniam tenetur expedita adipisci voluptatibus
                   eos officiis sit.</p>

                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing
                     elit. Consequuntur labore porro itaque.</p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Obcaecati quasi adipisci, nostrum unde repellat cumque id 
             perspiciatis itaque! Modi commodi nihil exercitationem,
              assumenda dolores illo accusantium iste enim voluptatibus
               quibusdam labore minima. Voluptas quaerat iusto aliquam,
                totam molestiae deleniti commodi.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  At quaerat, voluptates, sapiente deleniti maiores corrupti 
                  obcaecati esse veniam tenetur expedita adipisci voluptatibus
                   eos officiis sit.</p>
                   
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing
                     elit. Consequuntur labore porro itaque.</p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision" />
        </div>
      </div>
    </section>


    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Obcaecati quasi adipisci, nostrum unde repellat cumque id 
             perspiciatis itaque! Modi commodi nihil exercitationem,
              assumenda dolores illo accusantium iste enim voluptatibus
               quibusdam labore minima. Voluptas quaerat iusto aliquam,
                totam molestiae deleniti commodi.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  At quaerat, voluptates, sapiente deleniti maiores corrupti 
                  obcaecati esse veniam tenetur expedita adipisci voluptatibus
                   eos officiis sit.</p>

                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing
                     elit. Consequuntur labore porro itaque.</p>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default About