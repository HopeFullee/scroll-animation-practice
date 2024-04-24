import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Item from './item';

const ThreeDimensionGrid = () => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: gridRef, offset: ['25% end', 'end end'], smooth: 100 });
  const containerZ = useTransform(scrollYProgress, [0, 1], ['0px', '6500px']);

  return (
    <section ref={gridRef} className="pb-[50vh] overflow-x-clip">
      <div style={{ perspective: '1500px' }} className="relative p-[2rem] flex-center">
        <motion.div
          className="grid grid-cols-8 gap-[2vw] w-full box-border transition-all duration-100 ease-linear"
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
