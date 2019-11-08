/* The goal of this component is to display a preview of out burger and show the "continue" or "cancel" buttons. */
/*This component expects to get 'ingredients' as a 'prop'*/
import React from 'react';

//Import our burger into the component.
import Burger from '../../Burger/Burger';

//Import out buttons in for "cancel" and "continue".
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return(
        <div className="CheckoutSummary">
            {/*Heading*/}
            <h1>We hope it taste well!</h1>

            {/*We are going to display the burger here, from the burger component. We also put it in a 300x300 box.*/}
            <div style={{width: '300px', height: '300px', margin: 'auto'}}>
                {/*We have to make sure to pass ingredents into the burger, which is expects as a "prop".*/}
                <Burger ingredients={props.ingredients}/>
            </div>

            {/*Add out buttons to the Checkout Summary*/}
            <Button 
                btnType="Danger"
                clicked="">CANCEL</Button>
            <Button 
                btnType="Success"
                clicked="">Continue</Button>
        </div>
    );
};
export default checkoutSummary;