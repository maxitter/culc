import "../css/button.css";

const Button = ({ label, onClick }) => {
  return (
    <button className="calc-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
