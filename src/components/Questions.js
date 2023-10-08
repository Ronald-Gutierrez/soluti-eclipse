import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import eclipse from "../assets/img/eclipse.png";
import lunaTierra from "../assets/img/lunaTierra.png";
import fasesEclipses from "../assets/img/fasesEclipses.jpg";

export const Questions = () => {
  return (
    <section className="question" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Extra data</h2>
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
                      <Row>
                      <h3>1. Why do eclipses occur?</h3>
                      <p>Eclipses, whether lunar or solar, occur due to the perfect alignment of Earth, the Moon, and the Sun in their orbits. During a solar eclipse, the Moon positions itself between Earth and the Sun, temporarily blocking sunlight. In a lunar eclipse, Earth comes between the Sun and the Moon, casting its shadow on the Moon, resulting in the eclipse. This precise alignment gives rise to these awe-inspiring astronomical events</p>
                        <Col md={6}>
                          <img src={eclipse} alt="eclipse" />
                        </Col>
                        <Col md={6}>
                          <TrackVisibility>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                              <Canvas
                                dpr={[1, 2]}
                                shadows
                                camera={{
                                  fov: 10,
                                  aspect: 1,
                                  near: 0.5,
                                  far: 1000,
                                  position: [0, 0, 5],
                                  alpha: true,
                                }}
                                style={{ width: "636px", height: "636px" }}
                              >
                                <PresentationControls speed={1.5} polar={[-0.1, Math.PI / 4]}>
                                  <Stage environment={"sunset"}>
                                    <Model rotation={[0, Math.PI / 5, 0]} />
                                  </Stage>
                                </PresentationControls>
                              </Canvas>
                            </div>
                          </TrackVisibility>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        <h3>2. Where can they be seen mostly?</h3>
                        <p>Not everyone can witness all solar eclipses. Because the moon's shadow on Earth is not very large, it can only be seen from a few places on the planet. You have to be on the sunny side of the Earth when it occurs and be within the lunar shadow's path</p>
                        <Col md={6}>
                          <img src={lunaTierra} alt="lunaTierra" />                        </Col>
                        <Col md={6}>
                          <TrackVisibility>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                              <Canvas
                                dpr={[1, 2]}
                                shadows
                                camera={{
                                  fov: 10,
                                  aspect: 1,
                                  near: 0.5,
                                  far: 1000,
                                  position: [0, 0, 5],
                                  alpha: true,
                                }}
                                style={{ width: "636px", height: "536px" }}
                              >
                                <PresentationControls speed={1.5} polar={[-0.1, Math.PI / 4]}>
                                  <Stage environment={"sunset"}>
                                    <Model1 rotation={[0, Math.PI / 5, 0]} />
                                  </Stage>
                                </PresentationControls>
                              </Canvas>
                            </div>
                          </TrackVisibility>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        <h3>3. How often do eclipses occur?</h3>
                        <p>Depending on the type, both total, partial, and annular eclipses occur at least twice a year somewhere on Earth, and partial eclipses can occur up to five times a year</p>
                        <img src={fasesEclipses} alt="fasesEclipses" />                         </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Image" />
    </section>
  )
}

function Model(props) {
  const { scene } = useGLTF("/eclipse.glb");

  // Aumenta la velocidad de rotación (por ejemplo, 0.05 radianes por fotograma)
  const rotationSpeed = 0.05;  // Ajusta este valor según tu preferencia

  // Actualiza la rotación en cada fotograma
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    scene.rotation.y = elapsedTime * rotationSpeed;
  });

  return <primitive object={scene} {...props} />;
}

function Model1(props) {
  const { scene } = useGLTF("/rotacion.glb");

  // Aumenta la velocidad de rotación (por ejemplo, 0.05 radianes por fotograma)
  const rotationSpeed = 0.05;  // Ajusta este valor según tu preferencia

  // Actualiza la rotación en cada fotograma
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    scene.rotation.y = elapsedTime * rotationSpeed;
  });

  return <primitive object={scene} {...props} />;
}
