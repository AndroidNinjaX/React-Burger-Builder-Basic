import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

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

    //This will happen when the component loads itself, and there is no way to route to it without it being mounted.
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
            </div>
        );
    }
}

export default Checkout;