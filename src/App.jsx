import { useState } from 'react'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import cartItems from './cartItems'

import {createStore} from "redux"

const initialStore = {
  count : 0
}

function reducer(state,action){
  console.log({state,action})
  if(action.type === "INCREASE"){
    return {...state,count:state.count+1}
  }
  if(action.type === "DECREASE"){
    return {...state,count:state.count-1}
  }
  if(action.type === "RESET"){
    return {...state,count: 0}
  }
  return state
}

const store = createStore(reducer,initialStore)

store.dispatch({type:"INCREASE"})
store.dispatch({type:"DECREASE"})
store.dispatch({type:"RESET"})


console.log(store.getState())

function App() {



  return (
    <>
    <Navbar cart={store.getState()}/>
    <CartContainer cart={cartItems}/>
    </>
  )
}

export default App
