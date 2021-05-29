import { useRef } from "react";

/**
 * React hook that permits to use the forwarded ref,
 * or a fallback when it's not provided.
 * @name useForwardRef
 * @template T
 * @param {React.RefObject<T>|undefined} refOrUndefined
 * @returns {React.RefObject<T>}
 */
const useForwardRef = (refOrUndefined) => {
  const ref = useRef();

  return refOrUndefined || ref;
};
export default useForwardRef;
