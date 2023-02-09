import React from "react";
import ListUniversities from "./ListUniversities";
import { fetchData } from "../../lib/suspense-demo-api";
const resource = fetchData();
const AsyncSuspendableComponent = () => {
  const data = resource.data.read();
  return <ListUniversities list={data} />;
};
export default AsyncSuspendableComponent;
