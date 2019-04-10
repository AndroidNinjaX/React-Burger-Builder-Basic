import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    /*This will be the variable to get all of our ingredients. This will be in a "object" format*/
    /*Remember the "key", we will just use "igKey" for this one, just something unique.*/
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
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
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxiliary>
    );
};

export default orderSummary;