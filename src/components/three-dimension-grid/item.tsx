import { type MotionValue, motion, useTransform } from 'framer-motion';

interface Props {
  scrollYProgress: MotionValue<number>;
  idx: number;
}

const Item = ({ scrollYProgress, idx }: Props) => {
  const getRandomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const itemX = useTransform(scrollYProgress, [0, 1], ['0%', getRandomNum(-150, 150).toString() + '%']);
  const itemY = useTransform(scrollYProgress, [0, 1], ['0%', getRandomNum(-300, 300).toString() + '%']);
  const itemRotateX = useTransform(scrollYProgress, [0, 1], [getRandomNum(-65, -25).toString() + 'deg', '0deg']);
  const itemScale = useTransform(scrollYProgress, [0, 1], [2, 0.5]);
  const itemBrightness = useTransform(scrollYProgress, [0, 0.4], ['0', '1']);

  return (
    <motion.div
      className="aspect-[1.5] relative overflow-hidden rounded-[8px]"
      style={{
        opacity: itemBrightness,
        transformOrigin: '50% 0%',
        translateX: itemX,
        translateY: itemY,
        rotateX: itemRotateX,
        translateZ: getRandomNum(-5000, -2000),
      }}
    >
      <motion.img
        src={`/assets/images/grid-3d/${idx}.jpg`}
        style={{
          scale: itemScale,
        }}
        className="object-cover object-center w-full"
        alt="item"
      />
    </motion.div>
  );
};

export default Item;
