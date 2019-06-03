import React from 'react';
import classes from './Spinner.module.css';

//The "Loading..." is just some logic to show, if something happens and we do not see the spinner.
const spinner = () => (
    <div className={classes.Loader}>Loading...</div>
);

export default spinner;