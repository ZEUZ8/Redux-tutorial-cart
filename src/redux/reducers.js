import { DECREASE, INCREASE, RESET, REMOVE, GET_TOTALS, TOGGLE_AMOUNT } from "./actions";

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
    let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
    
    return { ...state, cart: tempCart };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((CartItem) => CartItem.id !== action.payload.id),
    };
  }

  if (action.type === GET_TOTALS) {
    let { total, count } = state.cart.reduce(
      (cartTotal, cartItme) => {
        const { price, amount } = cartItme;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.count += amount;

        return cartTotal;
      },
      { total: 0, count: 0 }
    );
    total = parseFloat(total.toFixed(2))
    return {...state,total,count}
  }

  if(action.type === TOGGLE_AMOUNT){
    return {...state,cart:state.cart.map((cartItem)=>{
      if(cartItem.id === action.payload.id){
        if(action.payload.toggle === 'inc'){
          return {...cartItem,amount:cartItem.amount+1}
        }
        if(action.payload.toggle === "dec"){
          return {...cartItem,amount : cartItem.amount-1}
        }
      }
      return cartItem
    })}
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
