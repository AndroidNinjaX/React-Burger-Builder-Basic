import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
/* Import the classes form our CSS file */
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        } );
    }
    
    render() {
        return (
            /* We use Aux HOC (Higher Order Component), so that we can return adjacent elements. */
            <Auxiliary>
                {/* In this main div, we will want to have a toolbar, sidebar, and backdrop. */}
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                {/* In the "main" element, we want to output the componet that we will wrap with this layout. */}
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
};

export default Layout;