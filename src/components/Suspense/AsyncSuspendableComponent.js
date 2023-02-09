import React from "react";
import ListUniversities from "./ListUniversities";
import { fetchData } from "../../lib/suspense-demo-api";
const resource = fetchData();
/**
 * This demo implementation of a suspense compatible data-fetching component was made possible
 * by the work done by Marvel Ken.
 * https://blog.openreplay.com/data-fetching-with-suspense-in-react/
 *
 * @returns {JSX.Element}
 * @constructor
 */
const AsyncSuspendableComponent = () => {
  const data = resource.data.read();
  return <ListUniversities list={data} />;
};
export default AsyncSuspendableComponent;
