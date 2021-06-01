import { useRef } from "react";

/**
 * React hook that permits to use the forwarded ref,
 * or a fallback when it's not provided.
 * @name useForwardRef
 * @template T
 * @param {React.ForwardedRef<T>|undefined} refOrUndefined
 * @returns {React.ForwardedRef<T>}
 */
const useForwardRef = (refOrUndefined) => {
  const ref = useRef(null);

  return refOrUndefined || ref;
};
export default useForwardRef;
