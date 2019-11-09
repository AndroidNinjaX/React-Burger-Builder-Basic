import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './Contact Data/ContactData';

class Checkout extends Component {
    /*This is just dummy data currently.*/
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            backon: 1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        console.log(this.props.location.search);
        console.log(query);
        const ingredients = {};
        for (let param of query.entries()){
            //['salad', '1']
            ingredients[param[0]] = +param[1];
        }

        this.setState({ingredients: ingredients});
    }

    /*We added the props, so now we set up the handelers*/
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
            </div>
        );
    }
}

export default Checkout;