import { type MotionValue, motion, useTransform } from 'framer-motion';

interface Props {
  progress: MotionValue<number>;
}

export const OuterDisc = ({ progress }: Props) => {
  const rotate = useTransform(progress, [0, 1], [0, 160]);

  return (
    <motion.div
      style={{ rotate: rotate }}
      className="w-[calc(1720/1920*100vw)] h-[calc(1720/1920*100vw)] rounded-full border-white/40 block border-1 absolute"
    ></motion.div>
  );
};
