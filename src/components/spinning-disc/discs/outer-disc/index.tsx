import { type MotionValue, motion, useTransform } from 'framer-motion';
import ThreeViewer from '../three-viewer';

interface Props {
  progress: MotionValue<number>;
}

export const OuterDisc = ({ progress }: Props) => {
  const rotate = useTransform(progress, [0, 1], [0, 160]);

  return (
    <motion.div
      style={{ rotate: rotate }}
      className="w-[calc(1720/1920*100vw)] h-[calc(1720/1920*100vw)] rounded-full border-white/40 block border-1 absolute"
    >
      {/* <ThreeViewer srcPath="/assets/gltf/metal-ball/scene.gltf" position="top-[-4%] left-[50%]" />
      <ThreeViewer srcPath="/assets/gltf/metal-ball/scene.gltf" position="left-[-0.5%] bottom-[65%]" />
      <ThreeViewer srcPath="/assets/gltf/metal-ball/scene.gltf" position="right-[-0.5%] bottom-[65%]" />
      <ThreeViewer srcPath="/assets/gltf/metal-ball/scene.gltf" position="left-[10.5%] bottom-[10%]" />
      <ThreeViewer srcPath="/assets/gltf/metal-ball/scene.gltf" position="right-[13%] bottom-[8%]" /> */}
    </motion.div>
  );
};
