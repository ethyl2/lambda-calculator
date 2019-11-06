import React from "react";

const OperatorButton = (props) => {
  const { operator } = props;
  return (
    <button className="button operatorButton">
      {operator}
      {/* Display a button element rendering the data being
       passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;
