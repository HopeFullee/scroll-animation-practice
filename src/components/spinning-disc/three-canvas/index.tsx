import { MotionValue, motion, useTransform } from 'framer-motion';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ItemMesh from './item-mesh';

interface Props {
  progress: MotionValue<number>;
}

const ThreeCanvas = ({ progress }: Props) => {
  return (
    <motion.div className="absolute h-[calc(1720/1920*100vw)] w-[calc(1920/1920*100vw)]">
      <Canvas>
        <ambientLight color={0xffffff} intensity={0.5} />
        <pointLight color={0xffffff} intensity={3000} position={[12, 12, 0]} />
        <ItemMesh progress={progress} />
        {/* <OrbitControls /> */}
      </Canvas>
    </motion.div>
  );
};

export default ThreeCanvas;
