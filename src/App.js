import Result from "./components/Result";
import Keypad from "./components/Keypad";
import InOut from "./components/InOUt";
import History from "./components/History";
import useCalculator from "./hooks/useCalculator";

const App = () => {
  const { result, handleButtonClick } = useCalculator();

  return (
    <>
      <Result />
      <InOut newValue={result}　handleButtonClick={handleButtonClick} />
      <Keypad onButtonClick={handleButtonClick} />
      <History />
    </>
  );
};

export default App;
