import React from 'react';

const layout = (props) => (
    /* We use Aux HOC (Higher Order Component), so that we can return adjacent elements. */
    /* In this main div, we will want to have a toolbar, sidebar, and backdrop. */
    <div>
        Toolbar, Sidebar, Backdrop
    </div>
    /* In the "main" element, we want to output the componet that we will wrap with this layout. */
    <main>
        {props.children}
    </main>
);

export default layout;