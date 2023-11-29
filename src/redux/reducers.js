import { DECREASE, INCREASE, RESET, REMOVE, GET_TOTALS } from "./actions";

function reducer(state, action) {
  if (action.type === RESET) {
    return { ...state, cart: [] };
  }

  if (action.type === INCREASE) {
    let tempItem = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempItem };
  }

  if (action.type === DECREASE) {
    //decreasing by one
    let tempCart = [];
    //checking the current value for decreasing
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    } else {
      tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
    }
    return { ...state, cart: tempCart };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((CartItem) => CartItem.id !== action.payload.id),
    };
  }

  if (action.type === GET_TOTALS) {
    let { total, amout } = state.cart.reduce(
      (cartTotal, cartItme) => {
        const { price, amount } = cartItme;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      { total: 0, amout: 0 }
    );
    total = parseFloat(total.toFixed(2))
    return {...state,total,amout}
  }

  return state;
}

export default reducer;

//using the switch case for the stateupdation
// switch(action.type){
//   case RESET:
//     return {...state,cart:[]};
//   default:
//     return state
// }
