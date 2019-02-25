import React from 'react';

import './Characters.css';

const characters = (props) => {

    return (
        <p className="Characters" onClick={props.click}>{props.character}</p>
    );
};

export default characters;