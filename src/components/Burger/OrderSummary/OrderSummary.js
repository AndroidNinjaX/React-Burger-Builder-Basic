import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentDidUpdate() {
        console.log('[OrderSummary] did update');
    }

    render () {

        /*This will be the variable to get all of our ingredients. This will be in a "object" format*/
        /*Remember the "key", we will just use "igKey" for this one, just something unique.*/
        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>   );
        }   );

        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                {/*This will be the list of the ingredients the user has added*/}
                <ul>
                    {ingredientsSummary}
                </ul>
                {/*Adding the price is pretty simple. Just pass the price in from "BurgerBuilder" and put it where we need to. Also use the "toFixed" to adjust the decimal places.*/}
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxiliary>
        );
    }
};

export default OrderSummary;