import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Questions = () => {
    
    const projects = [
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
      },
    ];

  return (
    <section className="question" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Questions</h2>
                <h3>1. ¿Cómo ocurren los eclipses solares?</h3>
                <p>Se produce cuando la luna se interpone en el camino de la luz del sol y proyecta su sombra en la Tierra. Eso significa que durante el día, la luna se mueve por delante del sol y se pone oscuro.</p>
                <h3>2. ¿Dónde se pueden ver mayormente?</h3>
                <p>No todos podemos ver todos los eclipses solares. Debido a que la sombra de la luna sobre la tierra no es muy grande, por eso se puede ver desde unos pocos lugares de la Tierra. Tienes que estar en el lado soleado del planeta cuando este suecede. También que estar en la trayectoria de la sombra lunar.</p>
                <h3>3. ¿Con qué frecuencia ocurren los eclipses?</h3>
                <p>Dependiento el tipo, tanto los eclipses totales y anulares se da al menos 2 veces al año en algún lugar de la Tierra, y los eclipses parciales pueden ocurrir hasta cinco veces al año.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Q. 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Q. 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Q. 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                        <img src="https://planetariochile.cl/wp-content/uploads/2019/02/diagrama-eclipse-corr-1024x537.jpg" alt="Descripción de la imagen" class="first"></img>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <img src="https://planetariochile.cl/wp-content/uploads/2019/02/tipos-eclipse1.png" alt="Descripción de la imagen" class="second"></img>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <img src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/979328832001/17eb1876-8549-4bf7-8a01-da5590e25e24/2c2dd283-e638-401e-b80b-17c237f0c7b5/1280x720/match/image.jpg" alt="Descripción de la imagen" class="third"></img>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
