import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const handleIncrease =()=> setCounter(counter+1);
    const handleDecrease =()=> setCounter(counter-1);

    return (
        <div>
            <h1>Counter :{counter} </h1>
            <button className="btn-decrease" onClick={handleIncrease}>Increase</button>
            <button className="btn-increase" onClick={handleDecrease}>Decrease</button>
        </div>
    )
}
export default Counter;
