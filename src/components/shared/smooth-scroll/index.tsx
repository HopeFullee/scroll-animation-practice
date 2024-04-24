import { ReactLenis } from '@studio-freight/react-lenis';

interface Props {
  children: React.ReactNode;
}

export const SmoothScroll = ({ children }: Props) => {
  const lenisOptions = {
    lerp: 0.1,
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 2,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
};
