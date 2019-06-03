import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

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
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    //This will handel getting the ingredients from the Firebase backend initially.
    componentDidMount () {
        axios.get('https://react-burger-builder-basic.firebaseio.com/ingredients')
            .then(response => {
                console.log("This is the ingredients stored on Firebase");
                console.log(response);
                this.setState({ingredients: response.data});
            });
    }

    /*Handler to determine weather "purchasable" is true ore not.*/
    updatePurchaseState (ingredents) {
        const sum = Object.keys(ingredents)
            .map(igkey => {
                return ingredents[igkey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchasable: sum > 0});
    }

    /*Add the functionality to be able to add ingredients from the burger*/
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
        this.updatePurchaseState(updatedIngredients);
    }

    /*Add the funtionality to be able to "remove" ingredients from the burger*/
    removeIngredientHandler = (type) => {
        /*Get the old count*/
        const oldCount = this.state.ingredients[type];
        /*Add this logic in, so that nothing happens if my ingredient goes less then 0.*/
        if (oldCount <= 0) {
            return;
        }
        /*Update that count*/
        const updatedCounted = oldCount - 1;
        /*Create a new object with the spread operator. This will be the updated ingredients.*/
        const updatedIngredients = {
            ...this.state.ingredients
        };
        /*Update the count of the new ingredients object*/
        updatedIngredients[type] = updatedCounted;
        /*Get how much the ingredient will be*/
        const priceDeduction = INGREDIENT_PRICES[type];
        /*Get the current total price*/
        const oldPrice = this.state.totalPrice;
        /*Subtract the new price to the old price*/
        const newPrice = oldPrice - priceDeduction;
        /*Now update state*/
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        //Want to set this to true, when the user clicks on "order".
        this.setState({loading: true});
        //alert("You Continue!");
        const order = {
            ingredents: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'TJ Hardin',
                address: {
                    street: 'Test Street',
                    zipCode: '12345',
                    country: 'USA'
                },
                email: 'test@test.com'
            },
            dileveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false, purchasing: false});
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false});
            });
    }

    render() {

        /*We add this logic to disable the button, if we do not have any of that ingredient.*/
        const disabledInfo ={
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;

        let burger = <Spinner />;

        if(this.state.ingredients) {
            burger = (
                <Auxiliary>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemove={this.removeIngredientHandler}
                        disabled={disabledInfo} 
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}/>
                </Auxiliary>
            );
            orderSummary = <OrderSummary 
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler} />; 
        }
        if(this.state.loading) {
            orderSummary = <Spinner />
        }

        return(
            /*Use the Auxiliary componet because we can return adjacent elements*/
            <Auxiliary>
                {/*We add the Modal component here, but will be adjusted to not show all the time*/}
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}  
                </Modal>
                {/*Base setup is to return 2 things. Our Burger itself, and the build controls*/}
                {/*We pass along our ingredents from our state, into the Burger component */}
                {burger}
            </Auxiliary>
        );
    }
}

export default withErrorHandler(BurgerBuider, axios);