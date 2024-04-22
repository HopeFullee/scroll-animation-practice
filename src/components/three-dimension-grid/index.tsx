import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import Item from './item';

const ThreeDimensionGrid = () => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: gridRef, offset: ['start end', 'end end'] });
  const containerZ = useTransform(scrollYProgress, [0, 1], ['0px', '6500px']);

  return (
    <section ref={gridRef} className="pb-[100vh]">
      <div style={{ perspective: '1500px' }} className="relative p-[2rem] flex-center">
        <motion.div
          className="grid grid-cols-8 gap-[2vw] w-[105vw] box-border"
          style={{ transformStyle: 'preserve-3d', translateZ: containerZ }}
        >
          {Array(48)
            .fill(0)
            .map((_, idx) => {
              return <Item scrollYProgress={scrollYProgress} key={idx} idx={idx + 1} />;
            })}
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeDimensionGrid;
