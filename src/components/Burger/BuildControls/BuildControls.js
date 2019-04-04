import React from 'react';
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

/*We make an array of controls, this is added for convience. So we have an array we can loop, to conviently build all the "buildControls" and render them*/
const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {/*We set up the "added" property, to send to the individual "BuildControl".*/}
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemove(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;