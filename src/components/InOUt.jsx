import ActionButton from "./ActionButton";
import "../css/inout.css";

const InOut = ({ newValue, handleButtonClick }) => {
  console.log("InOut newValue:", newValue);
  const visibilityStyle = newValue === 0 ? { visibility: "hidden" } : {};

  return (
    <>
      <div className="hukidashi" style={visibilityStyle}>
        <div className="input_value">
          <span className="yen">{newValue.toLocaleString()} </span>
          <span className="yenwo">円を</span>
        </div>
        <div className="action_buttons">
          <ActionButton label="自分で使った" value={newValue} handleButtonClick={handleButtonClick}/>
          <ActionButton label="2人用に使った" value={newValue} handleButtonClick={handleButtonClick} />
          <ActionButton label="振り込みした" value={newValue} handleButtonClick={handleButtonClick} />
        </div>
        <div className="triangle"></div>
      </div>
    </>
  );
};

export default InOut;
