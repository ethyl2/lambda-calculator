import React from "react";

const SpecialButton = (props) => {
  const { special, clearDisplay } = props;
  //console.log(special);

  return (
    <button className="button specialButton" onClick={() => clearDisplay({special})}>{special}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialButton;
