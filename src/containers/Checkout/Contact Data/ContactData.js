import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        //This is to prevent the default from sending a request to reload the page.
        event.preventDefault();

        this.setState({loading: true});
        const order = {
            ingredents: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'TJ Hardin',
                address: {
                    street: 'Test Street',
                    zipCode: '12345',
                    country: 'USA'
                },
                email: 'test@test.com'
            },
            dileveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
            })
            .catch(error => {
                this.setState({loading: false});
            });
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

