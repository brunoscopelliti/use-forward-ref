import React from "react";

declare const useForwardRef : <T>(maybeRef ?: React.RefObject<T>) => React.RefObject<T>;

export default useForwardRef;
