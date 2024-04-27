import React, { Component } from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

import classes from './BurgerIngredients.module.css'
import * as actions from '../../actions'

class BurgerIngredients extends Component {

    state = {
        types: ['lettuce', 'chicken', 'onion', 'pickle', 'tomato', 'cheese', 'paneer'],  
    }


    addIngredient = (typ) => {
        this.props.addIngredient(typ)
    }

    removeIngredient = (typ) => {
        this.props.removeIngredient(typ)
    }


    renderButtons = () => (
        this.state.types.map(type => (
            <div key={type} className={classes.select}>
                <Button  className={classes.plus} size='large' variant="contained" color="primary" onClick={() => this.addIngredient(type)}>
                    + {type}
                </Button>
                <Button  className={classes.minus} size='large'  disabled={this.props.ingredients[type] === 0} variant="outlined"  onClick={() => this.removeIngredient(type)}>
                    - {type}
                </Button>
            </div>
        ))
    )

    render() {

        return (
            <div className={classes.container}>
                <Typography variant='h4' style={{color: 'black'}}>{this.props.totalPrice.toFixed(2)} Rs</Typography>
                {this.renderButtons()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice
    }
}

export default connect(mapStateToProps, actions)(BurgerIngredients)
