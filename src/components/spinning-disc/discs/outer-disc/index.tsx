import { type MotionValue, motion, useTransform } from 'framer-motion';

interface Props {
  progress: MotionValue<number>;
}

export const OuterDisc = ({ progress }: Props) => {
  const rotate = useTransform(progress, [0, 1], [-60, 360]);

  return (
    <motion.div
      style={{ rotate: 0 }}
      className="w-[calc(1720/1920*100vw)] h-[calc(1720/1920*100vw)] rounded-full border-white block border-1 absolute"
    >
      <span className="block absolute rounded-full top-[-2.8%] left-[50%] translate-x-[-50%] h-[calc(100/1920*100vw)] w-[calc(100/1920*100vw)] bg-gray-400" />
      <span className="block absolute rounded-full left-[2.6%] bottom-[66%] translate-y-[-66%] h-[calc(100/1920*100vw)] w-[calc(100/1920*100vw)] bg-gray-400" />
      <span className="block absolute rounded-full right-[2.6%] bottom-[66%] translate-y-[-66%] h-[calc(100/1920*100vw)] w-[calc(100/1920*100vw)] bg-gray-400" />
    </motion.div>
  );
};
