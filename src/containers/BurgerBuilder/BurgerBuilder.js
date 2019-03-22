import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';

class BurgerBuider extends Component {
    render() {
        return(
            /*Use the Auxiliary componet because we can return adjacent elements*/
            <Auxiliary>
                {/*Base setup is to return 2 things. Our Burger itself, and the build controls*/}
                <div>Burger</div>
                <div>Build Controls</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuider;