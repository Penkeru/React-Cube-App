import React, { Component } from 'react'
import * as THREE from 'three'
import './scene.scss'

class BoxScene extends Component {
  componentDidMount() {
    const boxSettings = this.props.boxSettings;
    const scene = new THREE.Scene();
    const containerSize = {
      width: this.mount.parentElement.clientWidth - 20,
      height: this.mount.parentElement.clientHeight - 40
    };
    const camera = new THREE.PerspectiveCamera(
      75,
      containerSize.width / containerSize.height,
      1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(containerSize.width, containerSize.height);
    this.mount.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(parseFloat(boxSettings.width) / 125, parseFloat(boxSettings.height) / 125, parseFloat(boxSettings.width) / 150);
    const material = new THREE.MeshBasicMaterial({ color: boxSettings.color });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    let animate = function () {
      requestAnimationFrame(animate);

     cube.rotation.x += parseInt(boxSettings.rotatingSpeed,10)/100;
     cube.rotation.y += parseInt(boxSettings.rotatingSpeed,10)/100;

      renderer.render(scene, camera);
    };
    animate();
  }

  

  render() {
    return <div className="scene-container" ref={(ref) => (this.mount = ref)} />;
  }
}

export default BoxScene;