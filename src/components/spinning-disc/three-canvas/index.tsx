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
    <motion.div className="h-[calc(1450/1000*100vw)] w-[calc(1450/1000*100vw] lg:h-[calc(1920/1920*100vw)] lg:w-[calc(1920/1920*100vw)] z-[1]">
      <Canvas camera={{ fov: 35 }}>
        <ambientLight color={0xffffff} intensity={0.5} />
        <pointLight color={0xffffff} intensity={3000} position={[11, 11, 6]} />
        <ItemMesh gltf={gltf} progress={progress} position={[0.17, -0.17, 0]} />
        <ItemMesh gltf={gltf} progress={progress} position={[0.25, -0.75, 0]} />
        <ItemMesh gltf={gltf} progress={progress} position={[0.35, -1.375, 0]} />
        {/* <OrbitControls /> */}
      </Canvas>
    </motion.div>
  );
};

export default ThreeCanvas;
