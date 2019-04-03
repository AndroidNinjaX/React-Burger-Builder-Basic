/*This is the component, for the burger that we are rendering to the screen*/
import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

/* The Burger component will use the BurgerIngredients component that we created */
const burger = (props) => {
    /*See Notes on how this works*/
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            console.log("This is my igKey '" + igKey + "'");
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                console.log("This is how many of that ingredient. props.ingredients[igKey] '" + props.ingredients[igKey] + "'");
                return <BurgerIngredients key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        console.log("This is my transformedIngredients variable: ");
        console.log(transformedIngredients);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    
    return (
        /*We make a wrapper, what the div is, to define some width and heigth of the burger*/
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {/*We return out "transformedIngredients"*/}
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>  
    );
};

export default burger;