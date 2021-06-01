import React from "react";

declare const useForwardRef : <T>(maybeRef ?: React.ForwardedRef<T>) => React.RefObject<T>;

export default useForwardRef;
