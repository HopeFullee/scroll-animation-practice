import { motion, useScroll, useTransform } from 'framer-motion';

const QclayAnim = () => {
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 0.5], ['0%', '-100%']);
  const firstSceneScale = useTransform(scrollYProgress, [0.15, 0.25], [1, 0.4]);
  const secondSceneScale = useTransform(scrollYProgress, [0, 0.5, 0.55, 1], [1, 10.9, 10.9, 1]);
  const secondSceneX = useTransform(scrollYProgress, [0, 0.5, 0.55, 1], ['0%', '-31.5%', '-31.5%', '0%']);
  const secondSceneY = useTransform(scrollYProgress, [0, 0.5, 0.55, 1], ['-33%', '-335%', '-335%', '0%']);
  const secondSceneBgOpacity = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);

  return (
    <section className="relative h-[300vh]">
      <motion.div id="inner-scroll-x" className="flex inset-0 fixed" style={{ translateX }}>
        <motion.div className="fixed inset-0 w-full bg-gray-400 flex-center" style={{ scale: firstSceneScale }}>
          <p className="text-[calc(120/1920*100vw)] font-semibold text-white">SCENE - 01</p>
        </motion.div>
        <div className="fixed inset-0 w-full flex-center translate-x-[100%] duration-0">
          <motion.div
            className="relative h-[37.5rem] w-[50.125rem] overflow-hidden rounded-[25px]"
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
              <img src={process.env.PUBLIC_URL + '/assets/images/ui-bg.webp'} alt="ui-bg" />
            </motion.div>
            <div
              className="absolute z-[10] h-[7.6rem] w-[11rem] rounded-xl top-[26.5rem] left-[21rem] flex-center"
              style={{
                background: 'linear-gradient(#e66465, #9198e5)',
              }}
            >
              <p className="text-white text-16">VIDEO-SCREEN</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default QclayAnim;
