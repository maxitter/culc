import { useState } from "react";
import ActionButton from "./ActionButton";
import "../css/inout.css";

const InOut = ({ newValue, handleButtonClick }) => {
  const visibilityStyle = newValue === 0 ? { visibility: "hidden" } : {};
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="hukidashi" style={visibilityStyle}>
        <div className="input_value">
          <span className="yen">{newValue.toLocaleString()} </span>
          <span className="yenwo">円を</span>
        </div>
        <div className="action_buttons">
          <ActionButton label="自分用" act={1} value={newValue} handleButtonClick={handleButtonClick} isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
          <ActionButton label="2人用" act={2} value={newValue} handleButtonClick={handleButtonClick} isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
          <ActionButton label="振込" act={3} value={newValue} handleButtonClick={handleButtonClick} isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
        </div>
        <div className="triangle"></div>
      </div>
    </>
  );
};

export default InOut;
