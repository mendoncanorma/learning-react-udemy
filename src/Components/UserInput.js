import React from 'react';

const userinput = ( props ) => {
    return (
        <input type="text" value={props.username} onChange={props.changed} />
    );
};

export default userinput;