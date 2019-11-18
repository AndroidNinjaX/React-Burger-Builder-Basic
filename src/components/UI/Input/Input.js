import React from 'react';
import classes from './Input.module.css';

const input = (props) => {

    let inputElement = null;
    const inputClasses = [classes.InputElement];

    //console.log("[Input.js] here! This is the 'inputClasses' array");
    //console.log(inputClasses);

    if (props.invalid && props.shouldValidate) {
        inputClasses.push(classes.Invalid);
    }
    
    switch (props.elementType) {
        case ('input'):
            //console.log("[Input.js] here! This is the props in 'input'");
            //console.log(props);
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className={inputClasses.join(' ')}
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>;
            break;
        case ('select'):
            //console.log("[Input.js] here! This is the props in 'select'");
            //console.log(props);
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
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
                value={props.value}
                onChange={props.changed}/>;
    };

    return (
        <div className={classes.Input}>
            <label classes={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
    
};  

export default input;