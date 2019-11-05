import React from "react";

const NumberButton = (props) => {
  const { number } = props;
  return (
    <button className="button numberButton" onClick={(e) => {
      console.log(number);
    }}>{number}</button>
  );
};

export default NumberButton;
