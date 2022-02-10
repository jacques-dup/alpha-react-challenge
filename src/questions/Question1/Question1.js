import React, { useState, useContext } from 'react';
import { CountContext } from '../../infrastructure/';


const Button = () => {

    // Implement the button using React Context here
    

    return (
        <button /*onClick={countHandler}*/>Increment</button>
    )
}

export const Question1 = () => {

    const [count, setCount] = useState(0);

    const countHandler = () => {
        setCount(count + 1);
    };

    return (
        <>
            <h1>Question 1</h1>

            {/* Implement the counter and button here */}
            

        </>
    )
};

export default Question1;