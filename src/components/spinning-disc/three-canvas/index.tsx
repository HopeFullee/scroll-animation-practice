import { MotionValue, motion } from 'framer-motion';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import ItemMesh from './item-mesh';
import { GLTF } from 'three-stdlib';
interface Props {
  progress: MotionValue<number>;
}

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial: THREE.Mesh;
  };
  materials: {
    Material__50: THREE.MeshStandardMaterial;
  };
};

const ThreeCanvas = ({ progress }: Props) => {
  const gltf = useGLTF('/assets/gltf/moon/scene.gltf') as GLTFResult;

  return (
    <motion.div className="absolute h-[calc(1720/1920*100vw)] w-[calc(1920/1920*100vw)] z-[100]">
      <Canvas camera={{ fov: 35 }}>
        <ambientLight color={0xffffff} intensity={0.5} />
        <pointLight color={0xffffff} intensity={3000} position={[12, 12, 6]} />
        <ItemMesh gltf={gltf} progress={progress} position={[0.17, -0.17, 0]} />
        <ItemMesh gltf={gltf} progress={progress} position={[0.35, -0.8, 0]} />
        <ItemMesh gltf={gltf} progress={progress} position={[0.55, -1.45, 0]} />
        {/* <OrbitControls /> */}
      </Canvas>
    </motion.div>
  );
};

export default ThreeCanvas;
