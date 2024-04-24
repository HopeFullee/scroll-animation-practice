import { SmoothScroll } from './components/shared';
import QclayAnim from './components/q-clay';
import ThreeDimensionGrid from './components/three-dimension-grid';
import { ScrollContainer } from './components/shared/scroll-container';

function App() {
  return (
    <SmoothScroll>
      <div className="relative bg-black/90">
        <div className="h-[200vh] flex-center">
          <p className="text-100 font-semibold text-white">TOP</p>
        </div>
        <QclayAnim />
        <ThreeDimensionGrid />
        <div className="h-[200vh] flex-center">
          <p className="text-100 font-semibold text-white">BOTTOM</p>
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
