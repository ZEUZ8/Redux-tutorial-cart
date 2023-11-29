import React from "react";
import { connect } from "react-redux";
import { MdDelete } from "react-icons/md";
import { REMOVE, INCREASE, DECREASE ,TOGGLE_AMOUNT,removeItem} from "../redux/actions";
const CartItem = ({
  img,
  title,
  price,
  amount,
  remove,
  decrease,
  increase,
  toggle,
}) => {
  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 cart-item align-middle">
      <div>
        <img
          className="p-8 rounded-lg w-full h-90"
          src={img}
          alt="prudect image"
        />
      </div>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 p-5">
            {title}
          </h5>
        </a>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 ">{price}</span>
          {/* <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
              Add to cart
            </a> */}

          <div className="flex items-center justify-between">
            <div class="max-w-xs mx-auto manipulate">
              <label
                for="counter-input"
                class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Choose quantity:
              </label>
              <div class="relative flex items-center">
                <button
                  onClick={() => {
                    if (amount === 1) {
                      return remove();
                    } else {
                      return toggle("dec");
                    }
                  }}
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="counter-input"
                  class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  id="counter-input"
                  data-input-counter
                  class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                  placeholder=""
                  value={amount}
                  required
                />
                <button
                  onClick={() => toggle("inc")}
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="counter-input"
                  class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="px-5 cursor-pointer">
              <MdDelete  onClick={() => remove()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProp = (dispatch, ownProps) => {
  const { id, amount } = ownProps;
  return {
    remove: () => dispatch(removeItem(id)),
    increase: () => dispatch({ type: INCREASE, payload: { id, amount } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
    toggle : (toggle) => dispatch({type:TOGGLE_AMOUNT,payload:{id,toggle}})
  };
};
export default connect(null, mapDispatchToProp)(CartItem);
