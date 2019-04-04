import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

/*Now we make a variable to have a mapping of which ingredient cost what. Make it outside of the class but in the same file. Typically coinstants you want to use as global constants will have all caps.*/
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuider extends Component {
    /* We make out "state" that contain our ingredients */
    /*Add a "total price", and base will be $4*/
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    /*Add the functionality to be able to add and remove ingredients from the burger*/
    addIngredientHandler = (type) => {
        /*Get the old count*/
        const oldCount = this.state.ingredients[type];
        /*Update that count*/
        const updatedCounted = oldCount + 1;
        /*Create a new object with the spread operator. This will be the updated ingredients.*/
        const updatedIngredients = {
            ...this.state.ingredients
        };
        /*Update the count of the new ingredients object*/
        updatedIngredients[type] = updatedCounted;
        /*Get how much the new ingredient will be*/
        const priceAddition = INGREDIENT_PRICES[type];
        /*Get the current total price*/
        const oldPrice = this.state.totalPrice;
        /*Add the new price to the old price*/
        const newPrice = oldPrice + priceAddition;
        /*Now update state*/
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    removeIngredientHandler = (type) => {

    }

    render() {
        return(
            /*Use the Auxiliary componet because we can return adjacent elements*/
            <Auxiliary>
                {/*Base setup is to return 2 things. Our Burger itself, and the build controls*/}
                {/*We pass along our ingredents from our state, into the Burger component */}
                <Burger ingredients={this.state.ingredients}/>
                {/*This is the "build controls" component. Bassicall stuff to build our burger with.*/}
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} />
            </Auxiliary>
        );
    }
}

export default BurgerBuider;