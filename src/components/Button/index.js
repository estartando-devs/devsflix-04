import "./style.css";

const Button = ({ onClick, children, isPink, size }) => {
  return (
    <button onClick={onClick} className={`button ${isPink ? "pink" : ""}`}>
      {children}
      {size && <span>946Mb</span>}
    </button>
  );
};
export { Button };
