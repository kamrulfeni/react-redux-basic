import React from 'react';

function Stats({count}) {
    return (
        <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow" >
        <div class="text-2xl font-semibold"> Total Count :{count}</div>
            
        </div>
    );
}

export default Stats;