import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { InnerDisc, CenterDisc, OuterDisc } from './discs';

const SpinningDisc = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: contentRef, smooth: 100, offset: ['300vh', '-100vh'] });

  return (
    <section ref={contentRef} className="overflow-clip h-[300vh] relative flex-center">
      <div className="w-full flex-center h-[100vh] sticky top-0 pt-[calc(60/1920*100vw)] ">
        <InnerDisc progress={scrollYProgress} />
        <CenterDisc progress={scrollYProgress} />
        <OuterDisc progress={scrollYProgress} />
      </div>
    </section>
  );
};

export default SpinningDisc;
