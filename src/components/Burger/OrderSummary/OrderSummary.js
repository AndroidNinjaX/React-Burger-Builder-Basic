import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

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
            <p>Continue to Checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Auxiliary>
    );
};

export default orderSummary;