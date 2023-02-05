import React from "react";
import ListUniversities from "./ListUniversities";
import { fetchData } from "../lib/suspense-demo-api";
const resource = fetchData(
  "http://universities.hipolabs.com/search?country=United+States"
);
const AsyncSuspendableComponent = () => {
  const data = resource.list.read();
  return <ListUniversities list={data} />;
};
export default AsyncSuspendableComponent;
