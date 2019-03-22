/*This is the component, for the burger that we are rendering to the screen*/
import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

/* The Burger component will use the BurgerIngredients component that we created */
const burger = (props) => {
    /*We make a new variable, that is taking our "props" which is an object, and using the "Object" object on it. This is a default JS method, not provided by react. This returns an array of given objkects own properity names, in the same order as we get with a normal loop.*/
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            console.log("This is my igKey '" + igKey + "'");
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                console.log("This is how many of that ingredient. props.ingredients[igKey] '" + props.ingredients[igKey] + "'");
                return <BurgerIngredients key={igKey + i} type={igKey} />
            });
        });
        console.log("This is my transformedIngredients variable: ");
        console.log(transformedIngredients);
        
    return (
        /*We make a wrapper, what the div is, to define some width and heigth of the burger*/
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>  
    );
};

export default burger;