import React from "react";

const NumberButton = (props) => {
  //console.log(props);
  const { number, numButtonHandler } = props;
  return (
    <button className="button numberButton" onClick={() => {
      numButtonHandler({number});
    }}
    >{number}</button>
  );
};

export default NumberButton;
