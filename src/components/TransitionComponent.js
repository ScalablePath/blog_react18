import React, { useEffect, useState, useTransition } from "react";
import axios from "axios";
import ListUniversities from "./ListUniversities";
import Spinner from "./Spinner";
const TransitionComponent = () => {
  const startTransition = useTransition()[1];
  const [query, setQuery] = useState("");
  const [busy, setBusy] = useState(false);
  const [results, setResults] = useState([]);
  const searchUniversities = async (search, controller) => {
    try {
      const url = `http://universities.hipolabs.com/search?name=${encodeURI(
        search
      )}&country=United+States`;
      console.log(url);

      const response = await axios.get(url, { signal: controller.signal });

      setBusy(false);
      const data = response.data;
      if (Array.isArray(data)) {
        setResults(data);
      } else {
        setResults([]);
      }
    } catch (e) {
      console.log(e);
      setResults([]);
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    if (query) {
      setBusy(true);
      startTransition(() => {
        searchUniversities(query, controller);
      });
    } else {
      setResults([]);
    }
    return () => {
      controller.abort();
    };
  }, [query]);
  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value.trim())}
          placeholder="enter query"
        />
        {busy ? <Spinner /> : null}
      </div>
      <div>
        <h3>
          {}
          {busy
            ? "searching"
            : query
            ? `${results.length} Result${
                results.length === 1 ? "" : "s"
              } for "${query}"`
            : `Type in your search`}
        </h3>
        {busy || results.length === 0 ? null : (
          <ListUniversities list={results} />
        )}
      </div>
    </div>
  );
};
export default TransitionComponent;
