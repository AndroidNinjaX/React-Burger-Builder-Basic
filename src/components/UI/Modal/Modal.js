import React, { Component } from 'react';
import classes from './Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    /*------------------
    We have to update this logic, because we now pass in "children" from the BurgerBuilder, because we did it as a variable. Due to this, "nextProps.show" does not work, and we need to check "nextProps.children". This will make sure that it does update if it gets new children.
    ------------------*/
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentDidUpdate() {
        console.log("[Modal] did update");
    }

    render() {
        return(
            <Auxiliary>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1': '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxiliary>);
    }
};

export default Modal;