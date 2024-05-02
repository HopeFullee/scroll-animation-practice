import { MotionValue, AnimationPlaybackControls, animate as framerAnimate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface Props {
  progress: MotionValue<number>;
}

const ThreeCanvas = ({ progress }: Props) => {
  const [models, setModels] = useState<Record<string, GLTF | null>>({
    inner: null,
    center: null,
  });
  const canvasRef = useRef<HTMLDivElement | null>(null);

  let timeline = null;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(0, 0, 40);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

  const ambientLight = new THREE.AmbientLight(0xffffff, 2);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1500);
  const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
  scene.add(pointLightHelper);
  pointLight.position.set(12, 12, -2);
  scene.add(pointLight);

  const loader = new GLTFLoader();
  // loader.load(process.env.PUBLIC_URL + '/assets/gltf/metal-ball/scene.gltf', (gltf) => {
  //   scene.add(gltf.scene);
  // });

  const mainLoader = async () => {
    const [objectA, objectB] = await Promise.all([
      loader.loadAsync('/assets/gltf/moon/scene.gltf'),
      loader.loadAsync('/assets/gltf/moon/scene.gltf'),
    ]);

    setModels({
      inner: objectA,
      center: objectB,
    });

    objectA.scene.position.set(-1.2, 1.7, 0);
    objectB.scene.position.set(3, 6.2, 0);
    scene.add(objectA.scene);
    scene.add(objectB.scene);
  };

  const animateThree = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(animateThree);
  };

  useEffect(() => {
    const onWindowResize = () => {
      if (!canvasRef.current) return;
      camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
      renderer.render(scene, camera);
    };

    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
    camera.updateProjectionMatrix();
    canvasRef.current.appendChild(renderer.domElement);

    mainLoader();
    animateThree();
  }, []);

  return <div ref={canvasRef} className=" absolute h-[calc(1720/1920*100vw)] w-[calc(1920/1920*100vw)]"></div>;
};

export default ThreeCanvas;
