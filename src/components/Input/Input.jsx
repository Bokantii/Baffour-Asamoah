import React from 'react';
import classes from './Input.module.scss';
const Input = ({ label, type = "text", id }) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : 'input');


  return (
    <div className={classes.input_wrapper}>
      <label htmlFor={inputId}>{label}</label>
      <input type={type} id={inputId} name={inputId} required/>
    </div>
  );
};

export default Input;
