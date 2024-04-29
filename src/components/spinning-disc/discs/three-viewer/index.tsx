import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import clsx from 'clsx';

interface Props {
  srcPath: string;
  position: string;
}

const ThreeViewer = ({ srcPath, position }: Props) => {
  const itemRef = useRef<HTMLDivElement | null>(null);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 200 / 200, 1, 1000);
  camera.position.set(0, 0, 4);

  const renderer = new THREE.WebGLRenderer({ alpha: true });

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
  directionalLight.position.set(0, 0, 1).normalize();
  scene.add(directionalLight);

  const loader = new GLTFLoader();
  loader.load(process.env.PUBLIC_URL + srcPath, (gltf) => {
    scene.add(gltf.scene);
  });

  function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();

  useEffect(() => {
    const onWindowResize = () => {
      if (!itemRef.current) return;
      camera.aspect = itemRef.current.clientWidth / itemRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(itemRef.current.clientWidth, itemRef.current.clientHeight);
      renderer.render(scene, camera);
    };

    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  useEffect(() => {
    if (!itemRef.current) return;

    renderer.setSize(itemRef.current.clientWidth, itemRef.current.clientHeight);
    itemRef.current.appendChild(renderer.domElement);
  }, []);

  return (
    <div
      ref={itemRef}
      className={clsx(`absolute rounded-full h-[calc(150/1920*100vw)] w-[calc(150/1920*100vw)]`, position)}
    />
  );
};

export default ThreeViewer;
