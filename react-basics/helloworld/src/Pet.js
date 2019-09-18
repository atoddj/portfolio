import React from 'react';
import HobbyList from './HobbyList';
import './Pet.css';

function Pet() {
    return(
        <div className="card">
            <h2 className="name">Moxie</h2>
            <img src="img/crow.jpg" alt="a crow perched on a rock" height="200px" />
            <HobbyList />
        </div>
    );
}

export default Pet