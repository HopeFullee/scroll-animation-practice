import { type MotionValue, motion, useTransform } from 'framer-motion';

interface Props {
  progress: MotionValue<number>;
}

export const CenterDisc = ({ progress }: Props) => {
  const rotate = useTransform(progress, [0, 1], [0, 120]);

  return (
    <motion.div
      style={{ rotate: rotate }}
      className="w-[calc(800/1000*100vw)] h-[calc(800/1000*100vw)] lg:w-[calc(950/1920*100vw)] lg:h-[calc(950/1920*100vw)] rounded-full border-white/40 block border-1 absolute"
    ></motion.div>
  );
};
