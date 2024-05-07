import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const QclayAnim = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    smooth: 100,
  });
  const translateX = useTransform(scrollYProgress, [0, 0.55], ['0%', '-100%']);
  const firstSceneScale = useTransform(scrollYProgress, [0.1, 0.25], [1, 0.5]);
  const secondSceneScale = useTransform(scrollYProgress, [0, 0.5, 0.55, 1], [1, 11, 11, 1]);
  const MoSecondSceneScale = useTransform(scrollYProgress, [0, 0.5, 0.55, 1], [1, 15, 15, 1]);
  const secondSceneX = useTransform(scrollYProgress, [0, 0.1, 0.55, 1], ['0%', '-30%', '-30%', '0%']);
  const MoSecondSceneX = useTransform(scrollYProgress, [0, 0.1, 0.55, 1], ['0%', '-42%', '-42%', '0%']);
  const secondSceneY = useTransform(scrollYProgress, [0, 0.5, 0.55, 1], ['-30%', '-335%', '-335%', '0%']);
  const MoSecondSceneY = useTransform(scrollYProgress, [0, 0.5, 0.55, 1], ['-30%', '-458%', '-458%', '0%']);
  const secondSceneBgOpacity = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);

  useEffect(() => {
    console.log(isMobile);

    const handleResize = () => {
      if (window.innerWidth <= 768) setIsMobile(true);
      else setIsMobile(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <section ref={contentRef} className="relative h-[300vh] overflow-clip">
      <motion.div className="flex h-[100vh] w-full top-0 sticky" style={{ translateX }}>
        <div className="w-full absolute inset-0 flex-center translate-all duration-[100ms] ease-linear">
          <motion.p style={{ scale: firstSceneScale }} className="text-[calc(120/1920*100vw)] font-semibold text-white">
            SCENE - 01
          </motion.p>
        </div>
        <div className="w-full absolute inset-0 flex-center translate-x-[100%]">
          <motion.div
            className="relative w-[calc(880/1000*100vw)] h-[calc(660/1000*100vw)] lg:h-[calc(610/1440*100vw)] lg:w-[calc(810/1440*100vw)] xl:w-810 xl:h-610 rounded-[3.5%] translate-all duration-[100ms] ease-linear overflow-hidden"
            style={
              isMobile
                ? {
                    scale: MoSecondSceneScale,
                    translateX: MoSecondSceneX,
                    translateY: MoSecondSceneY,
                  }
                : {
                    scale: secondSceneScale,
                    translateX: secondSceneX,
                    translateY: secondSceneY,
                  }
            }
          >
            <motion.div
              className="absolute w-full h-full bg-black/90"
              style={{
                opacity: secondSceneBgOpacity,
              }}
            >
              <img
                src={process.env.PUBLIC_URL + '/assets/images/ui-bg.webp'}
                width={802}
                height={601.5}
                className="object-cover w-full"
                alt="ui-bg"
              />
            </motion.div>
            <div className="absolute z-[10] h-[calc(132/1000*100vw)] w-[calc(192/1000*100vw)] lg:h-[calc(122/1440*100vw)] lg:w-[calc(176/1440*100vw)] xl:w-176 xl:h-122 overflow-hidden rounded-[calc(15/1000*100vw)] md:rounded-[calc(15/1920*100vw)] bottom-[9.2%] md:bottom-[9.5%] left-[41.9%] flex-center">
              <video loop={true} muted={true} autoPlay={true} controls={false} className="scale-[1.25]">
                <source src="/assets/videos/video-3.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default QclayAnim;
