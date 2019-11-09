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
                <Button btnType="Success">Order</Button>
            </div>
        );
    }
}

export default ContactData;

