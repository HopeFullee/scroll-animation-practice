import { motion, useScroll, useTransform } from 'framer-motion';
import Item from './item';

const ThreeDimensionGrid = () => {
  const { scrollYProgress } = useScroll();
  const containerForward = useTransform(scrollYProgress, [0, 1], ['0', '6500px']);

  return (
    <section style={{ perspective: '1500px' }} className="overflow-hidden">
      <motion.div
        className="grid grid-cols-8 gap-40"
        style={{ transformStyle: 'preserve-3d', translateZ: containerForward, translateY: '100px' }}
      >
        {[...Array(48)].map((_, idx) => {
          return <Item scrollYProgress={scrollYProgress} key={idx} />;
        })}
      </motion.div>
    </section>
  );
};

export default ThreeDimensionGrid;
