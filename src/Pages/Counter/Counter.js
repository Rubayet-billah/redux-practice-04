import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='flex justify-center mt-24'>
            <div className='bg-green-200 text-center p-6 rounded-md'>
                <h2 className='text-2xl'>Count: {count}</h2>
                <button onClick={() => setCount(count + 1)} className='bg-gradient-to-r from-red-500 to-pink-400 px-5 py-2 m-4 rounded-md text-white'>Increment</button>
                <button onClick={() => setCount(prvState => prvState - 1)} className='bg-gradient-to-r from-blue-500 to-violet-400 px-5 py-2 m-4 rounded-md text-white'>Decrement</button>
            </div>
        </div>
    )
};

export default Counter;