import React, {useState} from "react";

//import any components needed

import { operators } from '../../../data';
import OperatorButton from './OperatorButton';

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorState, setOperatorState] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div className="operatorsContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorState.map(operator => {
         console.log(operator)
         return <OperatorButton operator={operator.char} key={operator.value} />
       })}
      
    </div>
  );
};

export default Operators;

