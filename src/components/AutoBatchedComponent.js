import React, { useState } from "react";

/**
 * A demo of auto batching, inspired by the code written by Dan Gaearon
 * https://github.com/reactwg/react-18/discussions/21
 * @returns {JSX.Element}
 * @constructor
 */
function AutoBatchedComponent() {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(false);

  function handleClick() {
    setCount((c) => c + 1); // Does not trigger a re-render yet
    setIsEven((count + 1) % 2 === 0); // Does not trigger a re-render yet
    // React will now do one render for 2 state changes
  }

  return (
    <div>
      <button onClick={handleClick}>Add</button>
      <p>
        {count} is {isEven ? "even" : "odd"}
      </p>
    </div>
  );
}
export default AutoBatchedComponent;
