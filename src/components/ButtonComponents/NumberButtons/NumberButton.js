import React from "react";

const NumberButton = (props) => {
  //console.log(props);
  const { number, trialButtonHandler } = props;
  return (
    <button className="button numberButton" onClick={() => {
      trialButtonHandler({number});
    }}
    >{number}</button>
  );
};

export default NumberButton;
