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
      setBusy(false);
      console.log(e);
      setResults([]);
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    if (query) {
      setBusy(true);
      // eslint-disable-next-line
      startTransition(() => {
        searchUniversities(query, controller).then();
      });
    } else {
      setBusy(false);
      setResults([]);
    }
    return () => {
      controller.abort();
    };
    // eslint-disable-next-line
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
          <div className="results-panel">
            <ListUniversities list={results} />
          </div>
        )}
      </div>
    </div>
  );
};
export default TransitionComponent;
