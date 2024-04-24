import { type MotionValue, motion, useTransform } from 'framer-motion';

interface Props {
  progress: MotionValue<number>;
}

export const InnerDisc = ({ progress }: Props) => {
  const rotate = useTransform(progress, [0, 1], [180, 480]);

  return (
    <motion.div
      style={{ rotate: rotate }}
      className="absolute w-[calc(300/1920*100vw)] h-[calc(300/1920*100vw)] rounded-full border-white block border-1"
    >
      <span className="block rounded-full h-[calc(100/1920*100vw)] w-[calc(100/1920*100vw)] bg-gray-400" />
    </motion.div>
  );
};
