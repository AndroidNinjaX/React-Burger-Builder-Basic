import React from 'react';
import classes from './Input.module.css';

const input = (props) => {

    let inputElement = null;
    
    switch (props.elementType) {
        case ('input'):
            //console.log("[Input.js] here! This is the props in 'input'");
            //console.log(props);
            inputElement = <input 
                className={classes.InputElement} 
                {...props.elementConfig} 
                value={props.value}/>;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className={classes.InputElement}
                {...props.elementConfig} 
                value={props.value}/>;
            break;
        case ('select'):
            //console.log("[Input.js] here! This is the props in 'select'");
            //console.log(props);
            inputElement = (
                <select
                    className={classes.InputElement}
                    value={props.value}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input 
                className={classes.InputElement} 
                {...props.elementConfig} 
                value={props.value}/>;
    };

    return (
        <div className={classes.Input}>
            <label classes={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
    
};  

export default input;