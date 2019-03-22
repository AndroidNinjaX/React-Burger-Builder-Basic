import React, { Component } from 'react';
import classes from './BurgerIngredients.module.css';
/*To use PropTypes, we have to install and it import it. Look in notes*/
import PropTypes from 'prop-types';

/* This will be a functional component, because it is stateless, but we are going to change it to a functional component to use PropTyes. You do not have to, but the instructor likes to, so we will. */
class BurgerIngredients extends Component {
    render () {
        /*We add some logic in here. We do this because there are differet types of ingredients, and we need to determine which ingredient to render. Lecture 150*/
        let ingredient = null;

        /*We add a "switch" and we will analyze the "type" of my ingredient. This will be a properity that we expect to recieve*/
        switch (this.props.type) {
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
    }
}

/* This is where we set up propTypes. This is to validate, that the information passed into the component is going to be a string. Also add "isRequired" so if something else is passed in, we will get an error. */
BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredients;