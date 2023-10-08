import React, { Component } from "react";
import * as THREE from "three";

class Earth extends Component {
  componentDidMount() {
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
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const earth = new THREE.Mesh(geometry, material);
    this.scene.add(earth);

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

      earth.rotation.x += (deltaMove.y * Math.PI) / 180;
      earth.rotation.y += (deltaMove.x * Math.PI) / 180;

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
    return <div className="earth-container" ref={(ref) => (this.mount = ref)} />;
  }
}

export default Earth;