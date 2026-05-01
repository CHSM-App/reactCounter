import CounterPage from "./features/counter/CounterPage";
import { CounterProvider } from "./features/counter/useCounter";

function App() {
  return (
    <CounterProvider>
      <CounterPage />
    </CounterProvider>
  );
}

export default App;
