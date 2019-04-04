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
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                {/*We set up the "added" property, to send to the individual "BuildControl".*/}
                added={() => props.ingredientAdded(ctrl.type)} />
        ))}
    </div>
);

export default buildControls;