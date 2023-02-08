import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";

/**
 * A demo of auto batching, inspired by the code written by Dan Gaearon
 * https://github.com/reactwg/react-18/discussions/21
 * @returns {JSX.Element}
 * @constructor
 */
function AutoBatchedComponent() {
  const [autoBatching, setAutoBatching] = useState(true);
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(false);

  function handleClick() {
    setCount((c) => c + 1); // Does not trigger a re-render yet
    setIsEven((count + 1) % 2 === 0); // Does not trigger a re-render yet
    // React will now do one render for 2 state changes
  }
  function handleClickWithFlush() {
    flushSync(() => {
      setCount((c) => c + 1);
    });
    setIsEven((count + 1) % 2 === 0);
  }
  useEffect(() => {
    console.log("rendering auto-batched component");
  });

  return (
    <div>
      <p>
        AutoBatching is {autoBatching ? "ON" : "OFF"}{" "}
        <button onClick={() => setAutoBatching(!autoBatching)}>toggle</button>{" "}
      </p>
      <button onClick={autoBatching ? handleClick : handleClickWithFlush}>
        +1
      </button>
      <p className="even-odd">
        {count} is {isEven ? "even" : "odd"}
      </p>
    </div>
  );
}
export default AutoBatchedComponent;
