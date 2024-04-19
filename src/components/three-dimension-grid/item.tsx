import { type MotionValue, motion, useTransform } from 'framer-motion';

interface Props {
  scrollYProgress: MotionValue<number>;
}

const Item = ({ scrollYProgress }: Props) => {
  const getRandomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const itemForward = useTransform(scrollYProgress, [0, 1], [getRandomNum(-5000, -2000).toString() + 'px', '6500px']);

  return (
    <motion.div
      className="w-200 h-200 bg-black/80"
      style={{
        translateX: getRandomNum(-150, 150),
        translateY: getRandomNum(-300, 300),
        translateZ: getRandomNum(-5000, -2000),
      }}
    ></motion.div>
  );
};

export default Item;
