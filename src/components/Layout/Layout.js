import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
/* Import the classes form our CSS file */
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    /* We use Aux HOC (Higher Order Component), so that we can return adjacent elements. */
    <Auxiliary>
        {/* In this main div, we will want to have a toolbar, sidebar, and backdrop. */}
        <Toolbar />
        {/* In the "main" element, we want to output the componet that we will wrap with this layout. */}
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;