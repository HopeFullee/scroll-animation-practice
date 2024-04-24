import { SmoothScroll } from './components/shared';
import QclayAnim from './components/q-clay';
import ThreeDimensionGrid from './components/three-dimension-grid';
import SpinningDisc from './components/spinning-disc';

function App() {
  return (
    <SmoothScroll>
      <div className="relative bg-black/90">
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
