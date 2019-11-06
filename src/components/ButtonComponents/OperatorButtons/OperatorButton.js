import React from "react";

const OperatorButton = (props) => {
  const { operator, operatorButtonHandler } = props;
  return (
    <button className="button operatorButton" onClick={() => operatorButtonHandler()}>
      {operator}
      {/* Display a button element rendering the data being
       passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;
