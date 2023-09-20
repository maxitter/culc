import Button from "./Button";
import "../css/keypad.css";

const Keypad = ({ onButtonClick }) => {
  const buttons = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["AC", "0", "del"],
  ];

  return (
    <div className="keypad">
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className="button-row">
          {row.map((label) => (
            <Button key={label} label={label} onClick={() => onButtonClick({label})} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keypad;