/**
 * this small fetching api demo represents a simple ad-hoc implementation of how data fetching
 * is done to be compatible for use with <Suspsense>. It is, according to React, not recommended.
 * The recommended approach is to use a  framework that implements this feature
 * Nonetheless it can be helpful to have a sense of how Suspense compatible components work.
 */

/**
 * Wrap promise written by Marvel Ken
 * https://blog.openreplay.com/data-fetching-with-suspense-in-react/
 *
 * @param promise
 * @returns {{read(): (*|undefined)}|*}
 */
import axios from "axios";
const wrapPromise = (promise) => {
  let status = "pending";
  let result;
  let suspend = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspend;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

export const fetchData = () => {
  return {
    data: wrapPromise(
      axios
        .get("http://universities.hipolabs.com/search?country=United+States")
        .then((res) => res.data)
        .catch((err) => console.log(err))
    ),
  };
};
