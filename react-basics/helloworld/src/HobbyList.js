import React from 'react';

function HobbyList() {
    const hobbies = ['Sleep', 'Eat'];
    const liStyle = {fontSize: '1.5em'};
    return (
        <div>
            <h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies:</h5>
            <ul>
                {hobbies.map( (h, i) => {
                    return(<li key={i} style={liStyle}>{h}</li>)
                })}
            </ul>
        </div>
    );
}

export default HobbyList;