import React from "react";

const NumberButton = (props) => {
  const { number } = props;
  return (
    <button className="button numberButton">{number}
      {/* Display a button element rendering the data being passed 
      down from the parent container on props */}
    </button>
  );
};

export default NumberButton;
