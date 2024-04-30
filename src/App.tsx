import { SmoothScroll } from './components/shared';
import QclayAnim from './components/q-clay';
import ThreeDimensionGrid from './components/three-dimension-grid';
import SpinningDisc from './components/spinning-disc';
import Three from './components/three';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    let timeoutTimer: NodeJS.Timeout;

    const onBlur = () => {
      timeoutTimer = setTimeout(function () {
        document.title = '잘가고 😭';
      }, 2000);
    };

    const onFocus = () => {
      clearTimeout(timeoutTimer);
      document.title = '반갑고 😘';
    };

    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);

    return () => {
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
    };
  }, []);

  return (
    <SmoothScroll>
      <div className="relative bg-black/90">
        <Three />
        <div className="h-[100vh] flex-center bg-black/25">
          <p className="text-100 font-semibold text-white">VOID SECTION - 1</p>
        </div>
        <SpinningDisc />
        <div className="h-[100vh] flex-center bg-black/25">
          <p className="text-100 font-semibold text-white">VOID SECTION - 2</p>
        </div>
        <QclayAnim />
        <div className="h-[100vh] flex-center bg-black/25">
          <p className="text-100 font-semibold text-white">VOID SECTION - 3</p>
        </div>
        <ThreeDimensionGrid />
        <div className="h-[100vh] flex-center bg-black/25">
          <p className="text-100 font-semibold text-white">VOID SECTION - 4</p>
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
