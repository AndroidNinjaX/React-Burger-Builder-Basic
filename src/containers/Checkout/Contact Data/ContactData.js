import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';

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
            <div>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input type='text' name='name' placeholder ='Your Name' />
                    <input type='text' name='email' placeholder ='Your Email' />
                    <input type='text' name='street' placeholder ='Your Street' />
                    <input type='text' name='postalCode' placeholder ='Postal Code' />
                    <Button btnType="Success">Order</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;

