import { useCallback, useMemo, useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = useCallback(
    () => setCounter((prevState) => prevState + 1),
    []
  );

  const resetCounter = useCallback(() => setCounter(initialValue), [
    initialValue
  ]);

  const value = useMemo(
    () => ({
      counter,
      incrementCounter,
      resetCounter
    }),
    [counter, incrementCounter, resetCounter]
  );

  return value;
};
