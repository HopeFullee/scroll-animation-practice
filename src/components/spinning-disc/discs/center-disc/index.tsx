import { type MotionValue, motion, useTransform } from 'framer-motion';
import ThreeViewer from '../three-viewer';

interface Props {
  progress: MotionValue<number>;
}

export const CenterDisc = ({ progress }: Props) => {
  const rotate = useTransform(progress, [0, 1], [0, 120]);

  return (
    <motion.div
      style={{ rotate: rotate }}
      className="w-[calc(950/1920*100vw)] h-[calc(950/1920*100vw)] rounded-full border-white/40 block border-1 absolute"
    >
      <ThreeViewer srcPath="/assets/gltf/metal-ball/scene.gltf" position="top-[4%] left-[10%]" />
      <ThreeViewer srcPath="/assets/gltf/metal-ball/scene.gltf" position="bottom-[6%] left-[8%]" />
    </motion.div>
  );
};
