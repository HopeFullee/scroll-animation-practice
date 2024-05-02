import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { InnerDisc, CenterDisc, OuterDisc } from './discs';
import ThreeCanvas from './three-canvas';

const SpinningDisc = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress, scrollY } = useScroll({ target: contentRef, smooth: 100, offset: ['500vh', '-100vh'] });

  scrollY.on('change', (y) => {
    console.log(y);
  });

  return (
    <section ref={contentRef} className="overflow-clip relative flex-col-center">
      <div className="h-[100vh]"></div>
      <div className="w-full h-[400vh]">
        <div className="sticky top-0 flex-center h-[100vh] pt-[calc(60/1920*100vw)]">
          <InnerDisc progress={scrollYProgress} />
          <CenterDisc progress={scrollYProgress} />
          <OuterDisc progress={scrollYProgress} />
          <ThreeCanvas progress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
};

export default SpinningDisc;
