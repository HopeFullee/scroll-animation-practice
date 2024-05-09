import { useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { InnerDisc, CenterDisc, OuterDisc } from './discs';
import ThreeCanvas from './three-canvas';
import Description from './description';

const SpinningDisc = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [stickyPos, setStickyPos] = useState(0);
  const { scrollYProgress } = useScroll({ target: contentRef, smooth: 100, offset: ['500vh', '-100vh'] });

  useEffect(() => {
    const handleResize = () => {
      if (!contentRef.current) return;
      const width = contentRef.current.clientWidth;

      if (width <= 1920) {
        const res = 1920 - width;
        setStickyPos(res / 2);
      }
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={contentRef} className="overflow-clip flex-col-center relative">
      <div className="w-full" style={{ paddingBottom: 520 - stickyPos }}>
        <Description />
      </div>
      <div className="w-full h-[400vh] relative">
        <div className="sticky top-0 lg:translate-x-0 min-h-[100vh] h-[100vh] translate-x-[-26%]">
          <div className="flex-center h-[110vh]">
            <InnerDisc progress={scrollYProgress} />
            <CenterDisc progress={scrollYProgress} />
            <OuterDisc progress={scrollYProgress} />
            <ThreeCanvas progress={scrollYProgress} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpinningDisc;
