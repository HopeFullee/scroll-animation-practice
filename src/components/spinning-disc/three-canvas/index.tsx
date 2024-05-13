import { MotionValue, motion } from 'framer-motion';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import ItemMesh from './item-mesh';
import { GLTF } from 'three-stdlib';
interface Props {
  progress: MotionValue<number>;
}

type GLTFResult = [
  GLTF & {
    nodes: {
      Box001: THREE.Mesh;
    };
    materials: {
      ['fallback Material']: THREE.MeshStandardMaterial;
    };
  },
  GLTF & {
    nodes: {
      Sphere001: THREE.Mesh;
    };
    materials: {
      ['fallback Material']: THREE.MeshStandardMaterial;
    };
  }
];

const ThreeCanvas = ({ progress }: Props) => {
  const gltf = useGLTF(['/assets/gltf/test-1/scene.gltf', '/assets/gltf/test-2/scene.gltf']) as GLTFResult;

  return (
    <motion.div className="h-[calc(1450/1000*100vw)] w-[calc(1450/1000*100vw] lg:h-[calc(1920/1920*100vw)] lg:w-[calc(1920/1920*100vw)] z-[1]">
      <Canvas camera={{ fov: 35 }}>
        <ambientLight color={0xffffff} intensity={0.7} />
        <pointLight color={0xffffff} intensity={1000} position={[11, 11, 6]} />
        <ItemMesh
          second={gltf?.[1].nodes.Sphere001.geometry}
          geometry={gltf?.[0].nodes.Box001.geometry}
          material={gltf?.[0].materials['fallback Material']}
          progress={progress}
          position={[0.17, -0.17, 0]}
        />
        <ItemMesh
          geometry={gltf?.[1].nodes.Sphere001.geometry}
          material={gltf?.[1].materials['fallback Material']}
          progress={progress}
          position={[0.25, -0.75, 0]}
        />
        <ItemMesh
          geometry={gltf?.[0].nodes.Box001.geometry}
          material={gltf?.[0].materials['fallback Material']}
          progress={progress}
          position={[0.35, -1.375, 0]}
        />
        {/* <OrbitControls /> */}
      </Canvas>
    </motion.div>
  );
};

export default ThreeCanvas;
