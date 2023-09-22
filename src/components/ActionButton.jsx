import { useContext } from "react";
import { FaUser, FaUserFriends } from "react-icons/fa";
import { AiFillMoneyCollect } from "react-icons/ai";
import { FirebaseContext } from "..";
import {
  doc,
  collection,
  setDoc,
  updateDoc,
  serverTimestamp,
  increment,
} from "firebase/firestore";
import "../css/actionbutton.css";

const ActionButton = ({ label, act, value, handleButtonClick, isDisabled, setIsDisabled }) => {
  const db = useContext(FirebaseContext);

  const abSetting = {
    1: { icon: <FaUser size={17} /> },
    2: { icon: <FaUserFriends size={24} /> },
    3: { icon: <AiFillMoneyCollect size={22} /> },
  };

  // 預け金の金額を更新するメソッド
  const updateAzuke = (used, type) => {
	setIsDisabled(true);
    const azukeRef = doc(db, "data", "current");
    updateDoc(azukeRef, {
      yen: increment(used),
    })
      .then(() => {
        console.log("Azuke successfully written!");
        writeHistory(used, type);
        handleButtonClick({ label: "AC" });
      })
      .catch((error) => {
		setIsDisabled(false);
        alert("エラーが発生しました。" + error);
      });
  };

  // 金額の更新履歴を書き込むメソッド
  const writeHistory = (used, type) => {
    const historyRef = collection(db, "history");
    const newDocRef = doc(historyRef);
    setDoc(newDocRef, {
      amount: used,
      type: type,
      when: serverTimestamp(),
      who: "maxi",
    })
      .then(() => {
        console.log("History successfully written!");
      })
      .catch((error) => {
        alert(
          "金額更新は成功しましたが、履歴の書き込みに失敗しました。" + error
        );
      })
	  .finally(() => {
		setIsDisabled(false);
	  });
  };

  const writeAction = () => {
    switch (label) {
      case "自分用":
        console.log(`自分で使った: -${value}`);
        updateAzuke(-value, "ForMe");
        break;
      case "2人用":
        console.log(`2人用に使った: -${Math.floor(value / 2)}`);
        updateAzuke(Math.floor(-value / 2), "ForUs");
        break;
      case "振込":
        console.log(`振り込んだ: +${value}`);
		updateAzuke(value, "Frkm");
        break;
      default:
        console.error("不明なアクション@ActionButton.jsx");
    }
  };

  return (
    <button className="action_button" onClick={writeAction} disabled={isDisabled}>
      {abSetting[act].icon}
      <span style={{ width: "4px", display: "inline-block" }}></span>
      {label}
    </button>
  );
};

export default ActionButton;
