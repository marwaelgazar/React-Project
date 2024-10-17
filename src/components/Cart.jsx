import React from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { delItem, updateQuantity } from "../redux/action/index"; // Add updateQuantity action
import { NavLink } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  // Handle quantity change by updating it in Redux
  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <hr />
              <p className="lead fw-bold">Price: ${cartItem.price}</p>
              <div className="quantity-control d-flex">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => handleQuantityChange(cartItem, cartItem.quantity - 1)}
                >
                  −
                </button>
                <input
                  type="number"
                  value={cartItem.quantity}
                  readOnly
                  className="form-control text-center mx-2"
                  style={{ width: "60px" }}
                />
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => handleQuantityChange(cartItem, cartItem.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-primary mb-5 w-25 mx-auto"
          >
            Proceed To Checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
