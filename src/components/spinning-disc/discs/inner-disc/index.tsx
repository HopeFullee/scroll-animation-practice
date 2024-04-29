import { type MotionValue, motion, useTransform } from 'framer-motion';
import ThreeViewer from '../three-viewer';
import { useEffect, useState } from 'react';

interface Props {
  progress: MotionValue<number>;
}

export const InnerDisc = ({ progress }: Props) => {
  const [currDescription, setCurrDescription] = useState(1);
  const rotate = useTransform(progress, [0, 1], [180, 480]);
  const rotateCounter = useTransform(progress, [0, 1], [-180, -480]);

  progress.on('change', (y) => {
    if (0.99 > y && y > 0.66) setCurrDescription(1);
    if (0.66 > y && y > 0.33) setCurrDescription(2);
    if (0.33 > y) setCurrDescription(3);
  });

  return (
    <motion.div
      id="inner-disc"
      style={{ rotate: rotate }}
      className="absolute w-[calc(300/1920*100vw)] h-[calc(300/1920*100vw)] border-white block border-1"
    >
      <ThreeViewer srcPath="/assets/gltf/metal-ball/scene.gltf" position="left-[-16%] top-[50%]" />
      <article>
        <ul>
          {DESCRIPTION_LIST.map(({ id, name, content, style }) => {
            return (
              <motion.li key={id} className={style} style={{ rotate: rotateCounter }}>
                <span className="text-black shrink-0 mt-[1%] font-light text-[calc(18/1920*100vw)] flex-center rounded-[100%] w-[calc(40/1920*100vw)] h-[calc(40/1920*100vw)] bg-white">
                  {id}
                </span>
                <div className="">
                  <h3 className="text-[calc(34/1920*100vw)] font-medium text-white">{name}</h3>
                  <p className="text-[calc(18/1920*100vw)] font-light text-white">{content}</p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </article>
    </motion.div>
  );
};

const DESCRIPTION_LIST = [
  {
    id: 1,
    name: `Programmable IP\nProtocol`,
    content: 'A permissionless protocol that anyone can\nextend',
    style: 'absolute top-0 left-0 whitespace-pre-wrap overflow-visible w-0 h-0 flex gap-[calc(14/1920*100vw)]',
  },
  {
    id: 2,
    name: 'Universal IP\nLedger',
    content: 'A universal IP registry standard with\nmodules for seamless IP licensing and\nremixing',
    style: 'absolute top-0 left-0 whitespace-pre-wrap overflow-visible w-0 h-0 flex gap-[calc(14/1920*100vw)]',
  },
  {
    id: 3,
    name: 'Creative\nEcosystem',
    content: 'A thriving ecosystem of applications to\nsupport the entire lifecycle of\nProgrammable IP development',
    style: 'absolute top-0 left-0 whitespace-pre-wrap overflow-visible w-0 h-0 flex gap-[calc(14/1920*100vw)]',
  },
];
