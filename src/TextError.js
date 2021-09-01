import React from 'react';

function TextError(props) {
    return(
        <div className='error' style={{ color: 'red' }}>
            {props.children}
        </div>
    )
}

export default TextError