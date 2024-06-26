import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { map } from "ramda";
import { isNilOrEmpty, isNotNullOrEmpty } from "../utils/util";
import { AppState } from "../utils/appStore";
import { SubMenu } from "../types/types";

const Cart: React.FC = () => {
  const cartItems = useSelector((store: AppState) => store.cart.items);
  const dispatch = useDispatch();

  const onClearCartClick = () => {
    dispatch(clearCart());
  }


  return (
    <section className="flex flex-col gap-y-2">
      <div className="text-lg font-semibold">Cart</div>
      {isNotNullOrEmpty(cartItems) && (
        <div
          className="rest-info w-max p-3 text-white border border-solid border-gray-600 bg-gray-900 rounded cursor-pointer"
          onClick={() => {
            onClearCartClick();
          }}
        >
          Clear Cart
        </div>
      )}
      {isNotNullOrEmpty(cartItems) &&
        cartItems?.map((menu: SubMenu) => (
          <div
              className="rest-info w-max p-4 border border-solid border-gray-600 bg-white rounded"
              key={menu.id}
            >
              {menu.name} - Rs.{menu.price}
            </div>
        ))}
      {isNilOrEmpty(cartItems) && (
        <div className="text-base">Cart is empty</div>
      )}
    </section>
  );
}

export default Cart;