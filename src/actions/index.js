// index.js
import {ADD_INGREDIENT, REMOVE_INGREDIENT, ADD_ITEM, REMOVE_ITEM} from './types';

export const addIngredient = (type) => dispatch => {
    dispatch({ type: ADD_INGREDIENT, payload: type })
}

export const removeIngredient = (type) => dispatch => {
    dispatch({ type: REMOVE_INGREDIENT, payload: type})
}

// change
// import { ADD_ITEM, REMOVE_ITEM } from './types';

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};
