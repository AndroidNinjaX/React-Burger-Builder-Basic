import React from 'react';
import classes from './BurgerIngredients.module.css';

/* This will be a functional component, because it is stateless */
const burgerIngredients = (props) => {
    /*We add some logic in here. We do this because there are differet types of ingredients, and we need to determine which ingredient to render. Lecture 150*/
    let ingredient = null;

    /*We add a "switch" and we will analyze the "type" of my ingredient. This will be a properity that we expect to recieve*/
    switch (props.type) {
        case('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>
            break;
        case ('sheese'):
            ingredient = <div className={classes.Cheese}></div>
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad}></div>
            break;
        case ('bacon'):
            ingredient = <div className={classes.Bacon}></div>
            break;
        default:
            ingredient = null;
    }

    return ingredient;
};

export default burgerIngredients;