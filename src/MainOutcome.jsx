import { useState } from 'react';

function MainOutcome() {

  const [counter, setCounter] = useState(0);

  const AddOn = () => {
    setCounter(counter + 1);
    console.log("clicked", counter);
    if(counter >= 20){
      setCounter(20);
      console.log("Limit is 20");
    }
  }

  const RemoveOn = () => {
    setCounter(counter - 1);
    console.log("clicked", counter);
    if(counter <=0) {
      setCounter(0);
      console.log("Lower Limit is 0");
    }
  }
  
  return(
    <div>
      <h2>Counter: {counter}</h2>

      <button onClick={AddOn}>Increment</button>
      <br />
      <button onClick={RemoveOn}>Decrement</button>
    </div>
  )
}

export default MainOutcome;