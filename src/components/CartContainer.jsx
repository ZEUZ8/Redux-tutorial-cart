import React, { useEffect } from 'react'
import CartItem from './CartItem';
import { connect } from 'react-redux';
import {RESET,GET_TOTALS} from "../redux/actions"

const CartContainer = ({cart=[],total,dispatch}) => {
  useEffect(()=>{
    dispatch({type:GET_TOTALS})
  })
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h1 className='m-5'>your bag</h1>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h1 className='m-5 underline underline-offset-8'>Your Bag</h1>
      </header>
      {/* cart items */}
      <article className='cart-items'>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}

      <footer className='m-10'>
        {/* <hr /> */}
        <div className="cart-total">
          <h2>
            total <span>{`$${total}.00`}</span>
          </h2>
        </div>
        {/* <button className="btn clear-btn">clear cart</button> */}
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            {/* <a href="#" class="text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Clear Cart</a> */}
            <button type="button" 
            onClick={()=>dispatch({type:RESET})}
            class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-grey-600 dark:text-red-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
              Clear Cart
            </button>
        </div>
      </footer>
    </section>
  );
}
const mapStateToProps = (store)=>{
  const {cart,total} = store
  return {cart,total}
}
export default connect(mapStateToProps) (CartContainer)
