import Result from "./components/Result";
import Keypad from "./components/Keypad";
import InOut from "./components/InOUt";
import useCalculator from "./hooks/useCalculator";

const App = () => {
  console.log("App.js is called");
  const { result, handleButtonClick } = useCalculator();

  return (
    <>
      <Result newResult={result} />
      <InOut newValue={result}　handleButtonClick={handleButtonClick} />
      <Keypad onButtonClick={handleButtonClick} />
    </>
  );
};

export default App;
