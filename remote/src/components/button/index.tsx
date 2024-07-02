import React from "react";
import "./button.css";
import useCount from '../../store'

const Button = () => {
  const [state, setState] = useCount();
  return (
    <button onClick={() => setState((s) => s + 1)} className="shared-btn">
      Click me: {state}
    </button>
  );
};

export default Button;
