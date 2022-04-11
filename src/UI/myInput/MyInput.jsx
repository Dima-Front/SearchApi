import React from 'react';
import i from './myInput.module.css'

function MyInput(props) {
    return (
        <input {...props} className={i.inp} type="text"/>
    );
}

export default MyInput;