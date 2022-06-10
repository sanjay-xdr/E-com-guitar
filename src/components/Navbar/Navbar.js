import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { useAuth } from "../../context/auth-context";

export default function Navbar() {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(CartContext);

  const { cartItem, wishListItem } = state;

  const { isLogin, setIsLogin } = useAuth();

  return (
    <nav className="navigation " id="nav">
      <div className="nav-sitename">
        <h1>
          <Link to="/" className="nav-logo anchor">
            Guitar Store
          </Link>
        </h1>
      </div>

      <div className="nav__searchbar">
        <input type="text" className="input " placeholder="Search an item" />
        <button className="btn btn-secondary search-btn">Search</button>
      </div>

      <div>
        <Link to="/products" className="shopping-btn">
          <span>Shop</span>
        </Link>
      </div>

      <div className="nav-other">
        {!isLogin && (
          <Link to="/login">
            {" "}
            <button className="btn btn-default">Login</button>
          </Link>
        )}
        {isLogin && (
          <button
            className="btn btn-default"
            onClick={() => {
              setIsLogin((item) => !item);
              localStorage.removeItem("token");

              navigate("/");
            }}
          >
            Logout
          </button>
        )}

        <div className="icon">
          <Link to="/wishlist" className="anchor">
            <i className="fa fa-heart icon-heart" id="icon"></i>
            {wishListItem.length ? (
              <span className="font-l batch">{wishListItem.length}</span>
            ) : (
              ""
            )}
          </Link>
          <span className="icon-text ">WishList</span>
        </div>

        <div className="icon">
          <Link to="/cart" className="anchor">
            <i className="fa fa-shopping-cart icon-cart" id="icon"></i>
            {cartItem.length ? (
              <span className="font-l batch">{cartItem.length}</span>
            ) : (
              ""
            )}
          </Link>
          <span className="icon-text">Cart</span>
        </div>
      </div>

   
    </nav>
  );
}
