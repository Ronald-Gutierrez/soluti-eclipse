import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import TrackVisibility from 'react-on-screen';
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import loading from '../assets/img/loading.png';


export const Game = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const imageStyle = {
    width: '50%', // Ajusta el ancho de la imagen según tus preferencias
  };

  return (
    <section className="game" id="game">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                      <h4>Videogame</h4>
                      <img src={loading} alt="loading" style={imageStyle} /> {/* Aplica el estilo a la imagen */}
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

function Model(props) {
  const { scene } = useGLTF("/bmw.glb");

  // Aumenta la velocidad de rotación (por ejemplo, 0.05 radianes por fotograma)
  const rotationSpeed = 0.05;  // Ajusta este valor según tu preferencia

  // Actualiza la rotación en cada fotograma
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    scene.rotation.y = elapsedTime * rotationSpeed;
  });

  return <primitive object={scene} {...props} />;
}
