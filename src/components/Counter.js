import React from 'react';

function Counter({numClics}) {
    return (
        <div className='counter'>
            { numClics }
        </div>
    );
}

export default Counter;