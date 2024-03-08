
import { ADD_INGREDIENT, REMOVE_INGREDIENT, ADD_ITEM, REMOVE_ITEM } from '../actions/types';

const INITIAL_STATE = {
  ingredients: {
    lettuce: 0,
    tomato: 0,
    pickle: 0,
    onion: 0,
    chicken: 0,
    cheese: 0,
    paneer: 0,
  },
  prices: {
    lettuce: 20,
    chicken: 60,
    onion: 10,
    pickle: 15,
    tomato: 10,
    cheese: 30,
    paneer: 50,
  },
  totalPrice: 50,
  totalCalories: 0,
  calories: {
    lettuce: 15,
    chicken: 375,
    pickle: 5,
    onion: 8,
    tomato: 7,
    cheese: 250,
    paneer: 200,
  },
  // New state for selected items
  selectedItems: [],
};

export default function (state = INITIAL_STATE, action) {
  debugger;
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: state.ingredients[action.payload] + 1,
        },
        totalPrice: state.totalPrice + state.prices[action.payload],
        totalCalories: state.totalCalories + state.calories[action.payload],
      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: state.ingredients[action.payload] - 1,
        },
        totalPrice: state.totalPrice - state.prices[action.payload],
        totalCalories: state.totalCalories - state.calories[action.payload],
      };
    // New cases for adding and removing selected items
    case ADD_ITEM:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        selectedItems: state.selectedItems.filter(item => item !== action.payload),
      };
    default:
      return state;
  }
}
