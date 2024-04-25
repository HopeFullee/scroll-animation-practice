import { type MotionValue, motion, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface Props {
  progress: MotionValue<number>;
}

export const InnerDisc = ({ progress }: Props) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const rotate = useTransform(progress, [0, 1], [180, 480]);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 200 / 200, 1, 1000);
  camera.position.set(0, 0, 30);

  const renderer = new THREE.WebGLRenderer({ alpha: true });

  const ambientLight = new THREE.AmbientLight(0xcccccc);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
  directionalLight.position.set(0, 0, 1000).normalize();
  scene.add(directionalLight);

  // const loader = new GLTFLoader();
  // loader.load(process.env.PUBLIC_URL + '/assets/gltf/blue-orb.gltf', (gltf) => {
  //   scene.add(gltf.scene);
  // });

  const loader = new FBXLoader();
  loader.load(process.env.PUBLIC_URL + '/assets/gltf/tamago-sushi/source/scene.fbx', (fbx) => {
    fbx.rotation.set(2, 0, 0);
    scene.add(fbx);
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
    document.getElementById('inner-disc-1')?.appendChild(renderer.domElement);
  }, []);

  return (
    <motion.div
      id="inner-disc"
      style={{ rotate: rotate }}
      className="absolute w-[calc(300/1920*100vw)] h-[calc(300/1920*100vw)] rounded-full border-white block border-1"
    >
      <div
        ref={itemRef}
        id="inner-disc-1"
        className="absolute left-[-16%] top-[50%] trasnlate-y-[-50%] rounded-full h-[calc(150/1920*100vw)] w-[calc(150/1920*100vw)]"
      />
    </motion.div>
  );
};
