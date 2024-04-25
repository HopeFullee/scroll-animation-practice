import { type MotionValue, motion, useTransform } from 'framer-motion';

interface Props {
  progress: MotionValue<number>;
}

export const CenterDisc = ({ progress }: Props) => {
  const rotate = useTransform(progress, [0, 1], [-60, 60]);

  return (
    <motion.div
      style={{ rotate: rotate }}
      className="w-[calc(950/1920*100vw)] h-[calc(950/1920*100vw)] rounded-full border-white block border-1 absolute"
    >
      <span className="block rounded-full absolute top-[10%] translate-y-[-10%] left-[10%] h-[calc(100/1920*100vw)] w-[calc(100/1920*100vw)] bg-gray-400" />
      <span className="block rounded-full absolute bottom-[10%] translate-y-[-10%] left-[8%] h-[calc(100/1920*100vw)] w-[calc(100/1920*100vw)] bg-gray-400" />
    </motion.div>
  );
};
