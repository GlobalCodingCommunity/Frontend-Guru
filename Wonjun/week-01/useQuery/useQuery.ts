import { useEffect, useState } from "react";

/**
 * @template T
 * @param { () => Promise<T> } fn
 * @param {import("react").DependencyList} deps
 */
export default function useQuery(fn: any, deps = []) {
  const [state, setState] = useState({
    status: "loading",
    data: undefined,
    error: undefined,
  });

  useEffect(() => {
    let ignore = false;

    setState({
      status: "loading",
      data: undefined,
      error: undefined,
    });

    fn()
      .then((data: any) => {
        if (!ignore) {
          setState({
            status: "success",
            data,
            error: undefined,
          });
        }
      })
      .catch((error: any) => {
        if (!ignore) {
          setState({
            status: "error",
            error: error,
          });
        }
      });

    return () => {
      ignore = true;
    };
  }, deps);

  return state;
}
