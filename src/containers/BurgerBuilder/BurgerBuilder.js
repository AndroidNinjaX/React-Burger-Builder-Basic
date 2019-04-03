import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuider extends Component {
    /* We make out "state" that contain our ingredients */
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return(
            /*Use the Auxiliary componet because we can return adjacent elements*/
            <Auxiliary>
                {/*Base setup is to return 2 things. Our Burger itself, and the build controls*/}
                {/*We pass along our ingredents from our state, into the Burger component */}
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Auxiliary>
        );
    }
}

export default BurgerBuider;