import { useContext, useState } from "react";
import { CartContext } from "../../context/cart-context";
import NavBar from "../../components/Navbar/Navbar";

import React from "react";
import "./Wishlist.css";

export default function WishList() {
  const { state, dispatch } = useContext(CartContext);

  const { wishListItem } = state;

  // as adding those to wishlist removing from the cart
  const doSomething = (id) => {
    setFilterCart(filterCart.filter((item) => item._id !== id));
  };

  

  return (
    <>
      <NavBar />
      <div className="grid-2-col" id="product-container">
        {wishListItem.length === 0 ? (
          <h2 className="font-xl ">No items in your Wishlist</h2>
        ) : (
          ""
        )}

        {wishListItem &&
          wishListItem.map(({ title, _id, image, description, price }) => (
            <div
              className="card-container container-flex flex-column"
              id="card-container"
            >
              <div className="image-container badge-container">
                <img src={image} className="img" alt="guitar image" />
              </div>
              <div className="card-title container-flex">
                <p className="font-medium margin-m1 padding-p1">{title} </p>
                <span
                  className="margin-m1 font-medium wishlist-icon "
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: { title, _id, image, description, price },
                    });

                    notify("Item is removed");
                  }}
                >
                  <i
                    className="fa fa-heart  wishlist-icon"
                    id="inwishlist"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div className=" container-flex flex-column">
                <p className="card-description margin-m1 padding-p2">
                  {description}{" "}
                </p>
                <p className="card-price margin-m1 padding-p2">
                  Rs.{price} <strike className="card-strikeprice">Rs. 7000</strike>{" "}
                  <span className="card-discount">(30% Off)</span>{" "}
                </p>
                <button className="btn-shopping-cart" id="btn">
                  <i
                    className="fa fa-shopping-cart fa-2x"
                    id="btn"
                    onClick={() =>
                      dispatch({
                        type: "MOVE_TO_CART",
                        payload: { title, _id, image, description, price },
                      })
                    }
                  >
                    {" "}
                    Move To Cart
                  </i>

              
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
