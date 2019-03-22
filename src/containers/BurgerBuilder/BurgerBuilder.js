import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuider extends Component {
    /* We make out "state" that contain our ingredients */
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return(
            /*Use the Auxiliary componet because we can return adjacent elements*/
            <Auxiliary>
                {/*Base setup is to return 2 things. Our Burger itself, and the build controls*/}
                {/*We pass along our ingredents from our state, into the Burger component */}
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuider;