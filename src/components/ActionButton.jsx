import { FaUser, FaUserFriends } from "react-icons/fa";
import { AiFillMoneyCollect } from "react-icons/ai";
import "../css/actionbutton.css";

const ActionButton = ({ label, act, value, handleButtonClick }) => {

  const abSetting = {
	1: { icon: <FaUser size={17} /> },
    2: { icon: <FaUserFriends size={24} /> },
    3: { icon: <AiFillMoneyCollect size={22} /> },
  };

  const writeAction = () => {
    switch (label) {
      case "自分で使った":
        console.log(`自分で使った: -${value}`);
        handleButtonClick({ label: "AC" });
        break;
      case "2人用に使った":
        console.log(`2人用に使った: -${Math.floor(value / 2)}`);
        handleButtonClick({ label: "AC" });
        break;
      case "振り込んだ":
        console.log(`振り込んだ: +${value}`);
        handleButtonClick({ label: "AC" });
        break;
      default:
        console.error("不明なアクション@ActionButton.jsx");
    }
  };

  return (
    <button className="action_button" onClick={writeAction}>
      {abSetting[act].icon}
	  <span style={{width: "4px", display:'inline-block'}}></span>
      {label}
    </button>
  );
};

export default ActionButton;
