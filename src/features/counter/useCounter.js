import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { saveCount as saveCountRequest } from "./counterService";

const CounterContext = createContext(null);

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const increaseCount = useCallback(() => {
    setCount((currentCount) => currentCount + 1);
    setMessage(null);
  }, []);

  const saveCount = useCallback(async () => {
    setIsLoading(true);
    setMessage(null);

    try {
      await saveCountRequest(count);
      setMessage({
        type: "success",
        text: "Count saved successfully.",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error?.response?.data?.message ||
          "Unable to save count. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }, [count]);

  const value = useMemo(
    () => ({
      count,
      isLoading,
      message,
      increaseCount,
      saveCount,
    }),
    [count, increaseCount, isLoading, message, saveCount],
  );

  return createElement(CounterContext.Provider, { value }, children);
}

export function useCounter() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }

  return context;
}
