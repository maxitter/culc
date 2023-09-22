import { useEffect, useState, useContext } from "react";
import "../css/result.css";
import { doc, onSnapshot } from "firebase/firestore";
import { FirebaseContext } from "..";

const Result = () => {
  const db = useContext(FirebaseContext);
  const [azuke, setAzuke] = useState("-");
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "data", "current"), (doc) => {
      if (doc.exists()) {
        setAzuke(doc.data().yen);
        setError(null);
      } else {
        setError("データが見つかりませんでした。");
      }
    }, (error) => {
      setError("エラーが発生しました。" + error);
    });
    return () => unsubscribe();
  }, [db]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <div className="result">
      <div className="result-content">
        <span className="label">預け金</span>
        <span className="amount">{azuke.toLocaleString()}</span>
        <span className="unit">円</span>
      </div>
    </div>
  );
};

export default Result;