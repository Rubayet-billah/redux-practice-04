import React, { useReducer } from 'react';

const Counter = () => {
    const initialState = 0;

    const reducer = (state, action) => {
        if (action.type === "INCREMENT") {
            return state + action.payload.count;
        } else if (action.type === "DECREMENT") {
            return state - action.payload.count;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='flex justify-center mt-8'>
            <div className='bg-green-200 text-center p-6 rounded-md'>
                <h2 className='text-2xl'>Count: {state}</h2>
                <button
                    onClick={() => dispatch({ type: "DECREMENT", payload: { count: 4 } })}
                    className='bg-gradient-to-r from-blue-500 to-violet-400 px-5 py-2 m-4 rounded-md text-white'>Decrement</button>
                <button
                    onClick={() => dispatch({ type: "INCREMENT", payload: { count: 5 } })}
                    className='bg-gradient-to-r from-red-500 to-pink-400 px-5 py-2 m-4 rounded-md text-white'>Increment</button>
            </div>
        </div>
    )
};

export default Counter;