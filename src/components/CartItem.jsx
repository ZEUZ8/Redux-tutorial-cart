import React from "react";

const CartItem = ({ img, title, price, amount }) => {
  return (
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 cart-item">
        <div>
          <img 
            className="p-8 rounded-lg w-full h-90"
            src={img} 
            alt="prudect image"
          />
        </div>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">
             {title}
            </h5>
          </a>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 ">
              {price}
            </span>
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
            
          </div>
        </div>
        
      </div>
  );
};

export default CartItem;
