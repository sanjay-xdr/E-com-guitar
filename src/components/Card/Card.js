import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { Link } from "react-router-dom";

export default function Card({ title, _id, image, description, price }) {
  const { state, dispatch } = useContext(CartContext);

  const { cartItem } = state;

  return (
    <div
      classNameName="card-container container-flex flex-column"
      id="card-container"
    >
      <div className="image-container badge-container">
        <img src={image} className="img" alt="guitar image" />
      </div>
      <div className="card-title container-flex">
        <p className="font-medium margin-m1 padding-p1">{title} </p>
        <span className="margin-m1 font-medium wishlist-icon">
          <i className="fa fa-heart " aria-hidden="true"></i>
        </span>
      </div>
      <div className=" container-flex flex-column">
        <p className="card-description margin-m1 padding-p2">{description} </p>
        <p className="card-price margin-m1 padding-p2">
          Rs.{price} <strike className="card-strikeprice">Rs. 7000</strike>{" "}
          <span className="card-discount">(30% Off)</span>{" "}
        </p>
        <button className="btn-shopping-cart" id="btn">
          {cartItem.some((item) => item._id === _id) ? (
            <Link
              to="/cart"
              classNameName="fa-2x"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              Go to cart{" "}
            </Link>
          ) : (
            <i
              className="fa fa-shopping-cart fa-2x"
              id="btn"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: { title, _id, image, description, price },
                })
              }
            >
              {" "}
              Add to cart
            </i>
          )}
        </button>
      </div>
    </div>
  );
}
