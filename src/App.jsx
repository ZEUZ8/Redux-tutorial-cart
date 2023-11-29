import { useState } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import cartItems from "./cartItems";

import { createStore } from "redux";
import { DECREASE, INCREASE, RESET } from "./redux/actions";
import reducer from "./redux/reducers";
import { Provider } from "react-redux";

const initialStore = {
  cart: cartItems,
  total: 0,
  count: 0,
};

const store = createStore(reducer, initialStore);

function App() {
  return (
    <Provider store={store}>
      <Navbar  />
      <CartContainer  />
    </Provider>
  );
}

export default App;
