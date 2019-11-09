import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        //This is to prevent the default from sending a request to reload the page.
        event.preventDefault();
    }

    render () {
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form className={classes.InputFlex}>
                    <input type='text' name='name' placeholder ='Your Name' />
                    <input type='email' name='email' placeholder ='Your Email' />
                    <input type='text' name='street' placeholder ='Your Street' />
                    <input type='text' name='postalCode' placeholder ='Postal Code' />
                </form>
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </div>
        );
    }
}

export default ContactData;

