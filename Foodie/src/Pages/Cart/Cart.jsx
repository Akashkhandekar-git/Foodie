import React, { useContext } from "react";
import "../Cart/Cart.css";
import { StoreContext } from "../../Component/Context/StoreContext";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { cartItem, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const Navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart_items">
      <hr />
        <div className="cart-items-title">
          <h4>Items</h4>
          <h4>Title</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Total</h4>
          <h4>Remove</h4>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img key={index} src={item.image} alt="" />
                  <h4>{item.name}</h4>
                  <h4>$ {item.price}</h4>
                  <h4>{cartItem[item._id]}</h4>
                  <h4>$ {item.price * cartItem[item._id]}</h4>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    <MdDelete className="delete-icon" />
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p> subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>$ {2} </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>$ {getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => Navigate("/placeorder")}>
            Proceed to CheckOut
          </button>
        </div>
        <div className="cart-promocode">
          <p> If you have a promocode please enter here..!</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
