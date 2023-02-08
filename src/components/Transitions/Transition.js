import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import Grid from "./Grid";

const Transition = () => {
  const [isPending, startTransition] = useTransition();
  const [selected, setSelected] = useState(10);
  const [count, setCount] = useState(10);
  const clickTab = (amount) => {
    setSelected(amount);
    startTransition(() => setCount(amount));
  };

  return (
    <div>
      <h3>click on the buttons to display larger and larger grids.</h3>
      <p>
        When you click on the button to select the grid size, the button's state
        changes immediately, but the grid may take a very long time to render.
      </p>
      <p>
        Click on the 500 x 500 button then on the 10 x 10 to cancel that render
      </p>
      <div className="tabs">
        <TabButton
          isActive={selected === 10}
          onClick={() => {
            clickTab(10);
          }}
        >
          10 by 10
        </TabButton>
        <TabButton
          isActive={selected === 100}
          onClick={() => {
            clickTab(100);
          }}
        >
          100 by 100 (slower)
        </TabButton>
        <TabButton
          isActive={selected === 500}
          onClick={() => {
            clickTab(500);
          }}
        >
          500 by 500 (slowest)
        </TabButton>
        <div className="rendering">{isPending ? " rendering..." : ""}</div>
      </div>
      <Grid count={count} />
    </div>
  );
};
export default Transition;
