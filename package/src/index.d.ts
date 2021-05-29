type HookState = {
  count : number;
  increment : () => void;
};

declare const useCounter : () => HookState;

export default useCounter;
