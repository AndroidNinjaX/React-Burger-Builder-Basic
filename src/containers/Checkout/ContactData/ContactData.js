import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: 'TJ Hardin',
            street: 'Test Street',
            zipCode: '12345',
            country: 'USA',
            email: 'test@test.com',
            dileveryMethod: 'fastest'
        },
        loading: false
    }

    orderHandler = (event) => {
        //This is to prevent the default from sending a request to reload the page.
        event.preventDefault();

        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, 
        };
        console.log(order);
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render () {
        //Show a spinner if we are still loading.
        let form = (
            <form>
                <Input inputtype="input" type='text' name='name' placeholder ='Your Name' />
                <Input inputtype="input" type='email' name='email' placeholder ='Your Email' />
                <Input inputtype="input" type='text' name='street' placeholder ='Your Street' />
                <Input inputtype="input" type='text' name='postalCode' placeholder ='Postal Code' />
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </div>
        );
    }
}

export default ContactData;

