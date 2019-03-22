/*This is the component, for the burger that we are rendering to the screen*/
import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

/* The Burger component will use the BurgerIngredients component that we created */
const burger = (props) => {
    return (
        /*We make a wrapper, what the div is, to define some width and heigth of the burger*/
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            <BurgerIngredients type="cheese" />
            <BurgerIngredients type="meat" />
            <BurgerIngredients type="bread-bottom" />
        </div>  
    );
};

export default burger;