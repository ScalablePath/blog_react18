import React, { Suspense } from "react";
import "./App.css";
import AsyncComponent from "./components/AsyncSuspendableComponent";
import AutoBatchedComponent from "./components/AutoBatchedComponent";
import Transition from "./components/Transitions/Transition";
import Spinner from "./components/Spinner";
function App() {
  return (
    <div className="App">
      <h1>AutoBatching example: Even Odd Counter</h1>
      <AutoBatchedComponent />
      <h1>Suspense Example: Full List of American Universities</h1>
      <Suspense fallback={<Spinner className="loader-lg" />}>
        <div className="results-panel">
          <AsyncComponent />
        </div>
      </Suspense>
      <h1>Transition example: Rendering grids of different sizes</h1>
      <Transition />
    </div>
  );
}
export default App;
