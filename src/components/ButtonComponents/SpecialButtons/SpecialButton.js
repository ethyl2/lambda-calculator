import React from "react";

const SpecialButton = (props) => {
  const { special } = props;
  return (
    <button className="button specialButton">{special}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialButton;
