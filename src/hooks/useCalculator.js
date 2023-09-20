import { useState } from "react";

const useCalculator = () => {
  const [result, setResult] = useState(0);

  const handleButtonClick = ({ label }) => {
    console.log(`label handleButton: ${label}`);
    if (!isNaN(label)) {
      setResult(result * 10 + Number(label));
    } else if (label === "del") {
      setResult(Math.floor(result / 10));
    } else if (label === "AC") {
      setResult(0);
	  console.log(`resultは${result}です`);
    } else {
      console.log(
        `%c${label}はまだ実装されていません useCalculator.js`,
        "color: yellow;"
      );
    }
  };

  return {
    result,
    handleButtonClick,
  };
};

export default useCalculator;
