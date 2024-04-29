import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const Three = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(0, 0, 5);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
  directionalLight.position.set(0, 0, 1000).normalize();
  scene.add(directionalLight);

  const loader = new GLTFLoader();
  loader.load(process.env.PUBLIC_URL + '/assets/gltf/metal-ball/scene.gltf', (gltf) => {
    scene.add(gltf.scene);
  });

  // const loader = new FBXLoader();
  // loader.load(process.env.PUBLIC_URL + '/assets/gltf/tamago-sushi/source/scene.fbx', (fbx) => {
  //   fbx.rotation.set(0.6, 2, 0);
  //   scene.add(fbx);
  // });

  function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();

  useEffect(() => {
    document.getElementById('three-scene')?.appendChild(renderer.domElement);
  }, []);

  return <section id="three-scene" className="overflow-hidden h-[100vh] w-full"></section>;
};

export default Three;
