import React, { Suspense } from "react";
import "./App.css";
import AsyncComponent from "./components/Suspense/AsyncComponent";
import AsyncSuspendableComponent from "./components/Suspense/AsyncSuspendableComponent";
import AutoBatchedComponent from "./components/AutoBatchedComponent";
import Transition from "./components/Transitions/Transition";
import Spinner from "./components/Spinner";
function App() {
  return (
    <div className="App">
      <h1>AutoBatching example: Even Odd Counter</h1>
      <p>
        Open up the Javascript console. When automatic batching is on, you will
        see only one render when you click on the "+1" button. When it is off,
        you will see two renders.
      </p>
      <AutoBatchedComponent />
      {/* uncomment this block to see the original non <Suspense> example in action
        <h1>List of American Universities</h1>
        <AsyncComponent />
        */}
      <h1>Suspense Example: Full List of American Universities</h1>
      <p>The API called here is quite slow to really illustrate the point</p>
      <Suspense fallback={<Spinner className="loader-lg" />}>
        <div className="results-panel">
          <AsyncSuspendableComponent />
        </div>
      </Suspense>
      <h1>Transition example: Rendering grids of different sizes</h1>
      <Transition />
    </div>
  );
}
export default App;
