import { useEffect, useState, useContext } from "react";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { FaUser, FaUserFriends } from "react-icons/fa";
import { AiFillMoneyCollect } from "react-icons/ai";
import "../css/history.css";
import { FirebaseContext } from "..";

const History = () => {
  const db = useContext(FirebaseContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "history"),
      orderBy("when", "desc"),
      limit(100)
    );

    // onSnapshotを使ってコレクションを監視します
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newData = snapshot.docChanges().map((change) => change.doc.data());
      setData((prevData) => [...newData, ...prevData].slice(0, 100));
    });

    return () => unsubscribe();
  }, [db]);

  const renderIcon = (type) => {
	switch (type) {
	  case "Frkm":
		return <AiFillMoneyCollect className="icon-frkm" />; //19
	  case "ForMe":
		return <FaUser className="icon-fauser" />; //16
	  case "ForUs":
		return <FaUserFriends className="icon-friends" />; //19
	  default:
		return null;
	}
  };

  return (
    <div className="history_wrap">
      {data
        .filter((item) => item.when && item.when.seconds)
        .map((item, index) => {
          return (
            <div key={index} className="history_record">
              <div className="history_type">{renderIcon(item.type)}</div>
              <div className="history_date">{new Date(item.when.seconds * 1000).toLocaleString()}</div>
              <div className="history_action">
                <div className="history_amount">{item.amount.toLocaleString()}</div>円
                {item.type === "Frkm" ? "を振り込んだ" : "を使った"}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default History;
