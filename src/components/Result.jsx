import "../css/result.css";

const Result = ({ newResult }) => {
  const azuke = 19780;
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
