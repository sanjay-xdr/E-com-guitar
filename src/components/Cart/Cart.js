import { useContext, useState } from "react";
import { CartContext } from "../../context/cart-context";
import Card from "../Card/Card";

import React from "react";
import "./Cart.css";

import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const notify = (msg) =>
    toast(msg, { className: "toastify", bodyClassName: "toastify" });

  const { state, dispatch } = useContext(CartContext);

  const { cartItem, wishListItem } = state;

  const priceArray = cartItem.map((obj) => {
    return obj.price;
  });

  const [loading, setLoading] = useState(true);

  return (
    <>
      <NavBar />
      <main className="container-flex">
        {!cartItem.length && <h3 className="font-xl ">Your cart is empty</h3>}

        <section className="cart-item">
          <div id="demo1">
            <ToastContainer className="font-xl" />

            {cartItem.length &&
              cartItem.map(
                ({ title, _id, image, description, price, quatity }) => {
                  return (
                    <div
                      className="horizontal-card-container container-flex"
                      key={_id}
                    >
                      <div className="image-container badge-container">
                        <img src={image} className="img" alt="guitar image" />
                      </div>
                      <div className="container-flex flex-column flex-center">
                        <div className="card-title container-flex">
                          <p className="font-medium margin-m1 padding-p1">
                            {title}
                          </p>
                        </div>
                        <div className="container-flex flex-column">
                          <p className="card-description margin-m1 padding-p2">
                            {description}
                          </p>
                          <p className="card-price margin-m1 padding-p2">
                            {price}{" "}
                            <strike className="card-strikeprice">
                              Rs. 2999
                            </strike>
                            <span className="card-discount">(30% Off)</span>
                          </p>
                          <div>
                            <div>
                              <button
                                className="quantity quantity-decrease"
                                onClick={() =>
                                  dispatch({
                                    type: "INCREMENT",
                                    payload: {
                                      title,
                                      _id,
                                      image,
                                      description,
                                      price,
                                    },
                                  })
                                }
                              >
                                +
                              </button>
                              <span className="quantity">{quatity}</span>
                              <button
                                className="quantity quantity-increase"
                                onClick={() =>
                                  dispatch({
                                    type: "DECREMENT",
                                    payload: { _id },
                                  })
                                }
                                disabled={quatity <= 1}
                              >
                                -
                              </button>
                            </div>
                            <button
                              className="btn-shopping-cart btn-small font-medium cart-btn"
                              onClick={() => {
                                dispatch({
                                  type: "ADD_TO_WISHLIST",
                                  payload: {
                                    title,
                                    _id,
                                    image,
                                    description,
                                    price,
                                  },
                                });
                                notify("Moved to wishlist");
                              }}
                            >
                              Add to Wishlist
                            </button>
                            <button
                              className="btn-shopping-cart btn-small font-medium btn-secondary cart-btn"
                              onClick={() => {
                                dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: {
                                    title,
                                    _id,
                                    image,
                                    description,
                                    price,
                                  },
                                });

                                notify("Item is removed");
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
          </div>
        </section>
        {cartItem.length ? (
          <section className="cart-price">
            <div className="container-flex price-container flex-column">
              <h1 className="font-xl">Price details</h1>

              <table>
                <tr>
                  <td className="font-medium">Price ({cartItem.length})</td>
                  <td className="font-medium">
                    {" "}
                    {priceArray.reduce(
                      (prev, cur) => Number(prev) + Number(cur),
                      0
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">Discount</td>
                  <td className="font-medium">0</td>
                </tr>
                <tr>
                  <td className="font-medium">Delivery Charges</td>
                  <td className="font-medium">0</td>
                </tr>
              </table>
              <hr className="someClass" />

              <table>
                <tr>
                  <td className="font-medium">Total Price</td>
                  <td className="font-medium align-center">
                    {" "}
                    {priceArray.reduce(
                      (prev, cur) => Number(prev) + Number(cur),
                      0
                    )}
                  </td>
                </tr>
              </table>

              <hr className="someClass" />

              <button className="btn btn-default order-btn">
                Place this order
              </button>
            </div>
          </section>
        ) : (
          ""
        )}
      </main>
      <div className="grid-2-col" id="product-container"></div>
    </>
  );
}
