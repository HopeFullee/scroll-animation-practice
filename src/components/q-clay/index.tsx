import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const QclayAnim = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    smooth: 100,
  });
  const translateX = useTransform(scrollYProgress, [0, 0.55], ['0%', '-100%']);
  const firstSceneScale = useTransform(scrollYProgress, [0.1, 0.25], [1, 0.5]);
  const secondSceneScale = useTransform(scrollYProgress, [0, 0.5, 0.55, 1], [1, 10.9, 10.9, 1]);
  const secondSceneX = useTransform(scrollYProgress, [0, 0.1, 0.55, 1], ['0%', '-30%', '-30%', '0%']);
  const secondSceneY = useTransform(scrollYProgress, [0, 0.5, 0.55, 1], ['-33%', '-335%', '-335%', '0%']);
  const secondSceneBgOpacity = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);

  return (
    <section ref={contentRef} className="relative h-[300vh] overflow-clip">
      <motion.div className="flex h-[100vh] w-full top-0 sticky" style={{ translateX }}>
        <div className="w-full absolute inset-0 flex-center translate-all duration-[100ms] ease-linear">
          <motion.p style={{ scale: firstSceneScale }} className="text-[calc(120/1920*100vw)] font-semibold text-white">
            SCENE - 01
          </motion.p>
        </div>
        <div className="w-full absolute inset-0 flex-center translate-x-[100%] ">
          <motion.div
            className="relative h-[calc(600/1920*100vw)] w-[calc(800/1920*100vw)] rounded-[calc(25/1920*100vw)] translate-all duration-[100ms] ease-linear overflow-hidden"
            style={{
              scale: secondSceneScale,
              translateX: secondSceneX,
              translateY: secondSceneY,
            }}
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
            <div
              className="absolute z-[10] h-[calc(118/1920*100vw)] w-[calc(176/1920*100vw)] rounded-[calc(12/1920*100vw)] bottom-[9.5%] left-[41.8%] flex-center translate-all duration-[100ms] ease-linear"
              style={{
                background: 'linear-gradient(#e66465, #9198e5)',
              }}
            >
              <p className="text-white font-semibold text-[calc(16/1920*100vw)]">VIDEO-SCREEN</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default QclayAnim;
