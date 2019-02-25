import React from 'react';

const validation = (props ) => {
    let validation_result;

    if (props.usernamelength>5) {
        validation_result = "Text long enough.";
    } else {
        validation_result = "Text too short.";
    }

    return (
        <p>{validation_result}</p>
    );
};

export default validation;