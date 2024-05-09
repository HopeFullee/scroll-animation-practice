import { type MotionValue, motion, useTransform, easeOut, easeInOut } from 'framer-motion';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useLenis } from '@studio-freight/react-lenis';
interface Props {
  progress: MotionValue<number>;
}

export const InnerDisc = ({ progress }: Props) => {
  const [currDescription, setCurrDescription] = useState(1);
  const rotate = useTransform(progress, [0, 1], [-70, 80]);
  const rotateCounter = useTransform(progress, [0, 1], [70, -80]);

  progress.on('change', (y) => {
    if (0.99 > y && y > 0.5) setCurrDescription(1);
    if (0.5 > y && y > 0.3) setCurrDescription(2);
    if (0.3 > y) setCurrDescription(3);
  });

  const lenis = useLenis();

  return (
    <>
      <span className="block z-[-1] w-[calc(250/1000*100vw)] h-[calc(250/1000*100vw)] lg:w-[calc(300/1920*100vw)] lg:h-[calc(300/1920*100vw)] border-white/40 border-1 rounded-full absolute" />
      <motion.div id="inner-disc" style={{ rotate: rotate }} className="absolute flex-center z-[10]">
        <article className="absolute">
          {DESCRIPTION_LIST.map(({ id, name, content, defaultPos, selectedPos, scrollTo }) => {
            return (
              <div
                key={id}
                className={clsx(
                  `${defaultPos} absolute flex-center transition-all duration-300 ease-in-out h-0 w-0 select-none`,
                  currDescription >= id && selectedPos
                )}
              >
                <motion.div
                  style={{ rotate: rotateCounter }}
                  className="under:all:transition-all under:all:duration-300 under:all:ease-in-out"
                >
                  <span
                    onClick={() => lenis?.scrollTo(scrollTo, { lerp: 0.25 })}
                    className={clsx(
                      'shrink-0 rounded-full font-light text-[calc(16/1000*100vw)] lg:text-[calc(16/1920*100vw)] flex-center w-[calc(40/1000*100vw)] lg:w-[calc(40/1920*100vw)] h-[calc(40/1000*100vw)] lg:h-[calc(40/1920*100vw)] border-1 border-white cursor-pointer',
                      currDescription === id ? 'bg-white text-black opacity-100' : 'opacity-40 text-white'
                    )}
                  >
                    {id}
                  </span>
                  <div className="absolute translate-x-[5vw] lg:translate-x-[2.8vw] top-0 w-[max-content] whitespace-pre-wrap flex flex-col gap-[calc(14/1000*100vw)] lg:gap-[calc(14/1920*100vw)]">
                    <h3
                      onClick={() => lenis?.scrollTo(scrollTo, { lerp: 0.25 })}
                      className={clsx(
                        'font-light leading-[1] text-white cursor-pointer w-[max-content] tracking-[0.5px]',
                        currDescription === id
                          ? 'text-[calc(38/1000*100vw)] lg:text-[calc(38/1920*100vw)] opacity-100'
                          : 'text-[calc(22/1000*100vw)] lg:text-[calc(22/1920*100vw)] opacity-40'
                      )}
                    >
                      {name}
                    </h3>
                    <p
                      className={clsx(
                        ' font-light text-white leading-[1.25] tracking-[0.5px]',
                        currDescription === id
                          ? 'opacity-100 text-[calc(18/1000*100vw)] lg:text-[calc(18/1920*100vw)]'
                          : 'opacity-0 text-[calc(12/1000*100vw)] lg:text-[calc(12/1920*100vw)]'
                      )}
                    >
                      {content}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </article>
      </motion.div>
    </>
  );
};

const DESCRIPTION_LIST = [
  {
    id: 1,
    name: `Programmable IP\nProtocol`,
    content: 'A permissionless protocol that anyone can\nextend',
    defaultPos: 'left-[12.4vw] top-[-10vw] lg:left-[5.2vw] lg:top-[-8.2vw] z-[30]',
    selectedPos: '',
    scrollTo: 3200,
  },
  {
    id: 2,
    name: 'Universal IP\nLedger',
    content: 'A universal IP registry standard with\nmodules for seamless IP licensing and\nremixing',
    defaultPos: 'left-[13.5vw] top-[8.5vw] lg:left-[8.4vw] lg:top-[5.2vw] z-[20]',
    selectedPos: 'translate-x-[2.5vw] lg:translate-x-[1.4vw] translate-y-[-8vw] lg:translate-y-[-5.5vw]',
    scrollTo: 4200,
  },
  {
    id: 3,
    name: 'Creative\nEcosystem',
    content: 'A thriving ecosystem of applications to\nsupport the entire lifecycle of\nProgrammable IP development',
    defaultPos: ' top-[16vw] left-[1vw] lg:top-[9.8vw] z-[10]',
    selectedPos: 'translate-x-[9.5vw] translate-y-[-4vw] lg:translate-x-[4.8vw] lg:translate-y-[-2vw]',
    scrollTo: 5100,
  },
];
