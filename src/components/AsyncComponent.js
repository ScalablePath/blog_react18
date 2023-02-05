import React, { useState, useEffect } from "react";
import axios from "axios";
import ListUniversities from "./ListUniversities";

const AsyncComponent = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://universities.hipolabs.com/search?country=United+States"
        );
        setData(response.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setData([]);
      }
    };
    fetchData();
  });
  return (
    <>
      {loading ? (
        <p>Loading please wait...</p>
      ) : (
        <ListUniversities list={data} />
      )}
    </>
  );
};
export default AsyncComponent;
