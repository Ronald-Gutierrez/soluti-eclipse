import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import lunaBanner from "../assets/img/lunaBanner.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";



export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Donde la ciencia y la belleza se unen", "Encontramos respuestas en la oscuridad de un eclipse", "Cuando el sol y la luna se encuentran, la magia del eclipse se desvela" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenidos a SOLUTI</span>
                <h1>{``} <span className="txt-rotate" dataPeriod="1000" data-rotate=' [ "Donde la ciencia y la belleza se unen", "Encontramos respuestas en la oscuridad de un eclipse", "Cuando el sol y la luna se encuentran, la magia del eclipse se desvela" ]'><span className="wrap">{text}</span></span></h1>
                  <p>¡Explora la maravilla de los eclipses como nunca antes! Nuestra página web te sumerge en el fascinante mundo de estos fenómenos celestiales, ofreciendo una experiencia educativa única. Además, desafía tus conocimientos con nuestro emocionante motor de videojuego diseñado para llevar tu comprensión de los eclipses a nuevas alturas. Descubre, aprende y juega mientras te adentras en el asombroso universo de los eclipses</p>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
              <Canvas
                dpr={[1, 2]}
                shadows
                camera={{
                  fov: 45,
                  aspect: 1,
                  near: 0.01,
                  far: 1000,
                  position: [0, 0, 5],
                  alpha: true,
                }}
                style={{ width: "500px", height: "500px" }}
              >
                <PresentationControls speed={1.5} polar={[-0.1, Math.PI / 4]}>
                  <Stage environment={"sunset"}>
                    <Model  rotation={[0, Math.PI / 5, 0]} />
                  </Stage>
                </PresentationControls>
              </Canvas>
            </TrackVisibility>

          </Col>
        </Row>
      </Container>
    </section>
  )
}
function Model(props) {
  const { scene } = useGLTF("/moon1.glb");

  // Aumenta la velocidad de rotación (por ejemplo, 0.05 radianes por fotograma)
  const rotationSpeed = 0.05;  // Ajusta este valor según tu preferencia

  // Actualiza la rotación en cada fotograma
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    scene.rotation.y = elapsedTime * rotationSpeed;
  });

  return <primitive object={scene} {...props} />;
}
