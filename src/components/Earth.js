import React, { Component } from "react";
import * as THREE from "three";
import EclipseText from './EclipseText'; // Importa el nuevo componente EclipseText
import VisibilitySensor from "react-visibility-sensor"; // Importa VisibilitySensor

class Earth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      eclipses: [],
      countries: [],
      visualization_places: []
    };
  }

  async componentDidMount() {
    // Validación para evitar la inicialización duplicada
    if (this.scene || this.camera) {
      return;
    }

    // Configura la escena
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    // Crea la Tierra
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/earth_8k.jpg");
    const material = new THREE.MeshPhongMaterial({ map: texture }); // Cambia a MeshPhongMaterial para sombreado
    const earth = new THREE.Mesh(geometry, material);
    this.scene.add(earth);

    // Añade una luz direccional
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3); // Color y intensidad
    directionalLight.position.set(1, 1, 1); // Dirección de la luz
    this.scene.add(directionalLight);

    const visualization_places = [
      {
        "date": "2023-10-14",
        "description": "Sun in Partial Eclipse at this Location",
        "duration": "2h 57m 31.2s",
        "coordinates": [
          -62.2,
          16.75
        ],
        "country": "Montserrat"
      },
      {
        "date": "2023-10-14",
        "description": "Sun in Partial Eclipse at this Location",
        "duration": "3h 27m 47.9s",
        "coordinates": [
          -88.916667,
          13.833333
        ],
        "country": "El Salvador"
      },
      {
        "date": "2023-10-14",
        "description": "Sun in Partial Eclipse at this Location",
        "duration": "2h 48m 09.2s",
        "coordinates": [
          -55.0,
          -10.0
        ],
        "country": "Brazil"
      },
      {
        "date": "2023-10-14",
        "description": "Sun in Partial Eclipse at this Location",
        "duration": "2h 57m 25.7s",
        "coordinates": [
          -97.0,
          38.0
        ],
        "country": "United States"
      },
      {
        "date": "2023-10-14",
        "description": "Sun in Partial Eclipse at this Location",
        "duration": "3h 02m 17.6s",
        "coordinates": [
          -59.0,
          5.0
        ],
        "country": "Guyana"
      },
      {
        "date": "2023-10-14",
        "description": "Sun in Partial Eclipse at this Location",
        "duration": "0h 18m 10.3s",
        "coordinates": [
          -16.566667,
          13.466667
        ],
        "country": "Gambia"
      },
      {
        "date": "2023-10-14",
        "description": "Sun in Partial Eclipse at this Location",
        "duration": "2h 56m 25.5s",
        "coordinates": [
          -59.533333,
          13.166667
        ],
        "country": "Barbados"
      },
      {
        "date": "2023-10-14",
        "description": "Sun in Partial Eclipse at this Location",
        "duration": "3h 12m 33.7s",
        "coordinates": [
          -70.666667,
          19.0
        ],
        "country": "Dominican Republic"
      },
      {
        "date": "2023-10-14",
        "description": "Sun in Partial Eclipse at this Location",
        "duration": "3h 05m 11.1s",
        "coordinates": [
          -66.5,
          18.25
        ],
        "country": "Puerto Rico"
      },
      {
        "date": "2023-10-14",
        "description": "Sun in Partial Eclipse at this Location",
        "duration": "3h 07m 35.7s",
        "coordinates": [
          -76.0,
          -10.0
      ],
        "country": "Perú"
      }
    ];

    const eclipses = [
      {
        "day": 14,
        "event": "Annular Solar Eclipse of 14 October 2023",
        "month": 10,
        "year": 2023
      }
    ];
    
    // Agrega rotación automática
    const animate = () => {
      earth.rotation.y += 0.001;
      renderer.render(this.scene, this.camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Agrega rotación al hacer clic y arrastrar
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const onDocumentMouseDown = (event) => {
      event.preventDefault();
      isDragging = true;
      const { clientX, clientY } = event;
      previousMousePosition = { x: clientX, y: clientY };
    };
    const onDocumentMouseMove = (event) => {
      if (!isDragging) return;
      const { clientX, clientY } = event;
      const deltaMove = {
        x: clientX - previousMousePosition.x,
        y: clientY - previousMousePosition.y,
      };

      earth.rotation.x += (deltaMove.y * Math.PI) / 720;
      earth.rotation.y += (deltaMove.x * Math.PI) / 720;

      previousMousePosition = { x: clientX, y: clientY };
    };
    const onDocumentMouseUp = () => {
      isDragging = false;
    };

    document.addEventListener("mousedown", onDocumentMouseDown);
    document.addEventListener("mousemove", onDocumentMouseMove);
    document.addEventListener("mouseup", onDocumentMouseUp);

    // Configura la posición de la cámara
    this.camera.position.z = 5;
  }

  render() {
    const eclipses = [
      {
        day: 14,
        event: "Annular Solar Eclipse of 14 October 2023",
        month: 10,
        year: 2023,
      },
      // Agrega más objetos de eclipse aquí
    ];
    return (
      <div className="earth-container" ref={(ref) => (this.mount = ref)}>
        <div className="eclipse-text-container">
          {eclipses.map((eclipse, index) => (
            <VisibilitySensor key={index} partialVisibility>
              {({ isVisible }) => (
                <EclipseText
                  fullText={`Eclipse ${eclipse.event} - ${eclipse.day}/${eclipse.month}/${eclipse.year}`}
                  style={{
                    marginTop: `${index * 30}px`,
                    visibility: isVisible ? "visible" : "hidden",
                  }}
                />
              )}
            </VisibilitySensor>
          ))}
        </div>
      </div>
    );
  }
}

export default Earth;