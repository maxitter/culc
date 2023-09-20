import "../css/result.css";

const Result = ({newResult}) => {
  return (
    <div className="result">
      <div className="result-content">
        <span className="label">預け金</span>
        <span className="amount">{newResult.toLocaleString()}</span>
        <span className="unit">円</span>
      </div>
    </div>
  );
};

export default Result;
