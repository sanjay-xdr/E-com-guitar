import React, { useContext } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import { FilterContext } from "./../../context/filter-context";

import { useNavigate } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const { dispatch } = useContext(FilterContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section>
        <div className="grid-2-col">
          <div>
            <img
              src="https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&w=800&h=740&dpr=1"
              alt="guitar-img"
              className="bg-img"
            />
          </div>

          <div className="text-container container-flex flex-center flex-column">
            <h2 className="font-xl white">Buying your first guitar?</h2>
            <br />
            <p className="font-medium white">Buy Best Quality Guitars</p>
          </div>
        </div>
      </section>

      <main className="categories">
        <div className="category-heading">
          <h3 className="font-xl">What you looking for?</h3>
        </div>

        <div className="category-items">
          <div className="grid-3-col category-1 ">
            <div
              onClick={() => {
                dispatch({ payload: "AcousticGuitar", type: "CATEGORY" });
                navigate("/products");
              }}
            >
              <img
                src="https://images.pexels.com/photos/210876/pexels-photo-210876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="category-img"
                alt=""
              />
            </div>

            <div
              onClick={() => {
                dispatch({ payload: "Electric Guitar", type: "CATEGORY" });
                navigate("/products");
              }}
            >
              <img
                src="https://images.pexels.com/photos/164861/pexels-photo-164861.jpeg?auto=compress&cs=tinysrgb&w=260&h=250&dpr=1"
                className="category-img"
                alt=""
              />
            </div>

            <div
              onClick={() => {
                dispatch({ payload: "Picks/Plectrum", type: "CATEGORY" });
                navigate("/products");
              }}
            >
              <img
                src="https://user-images.githubusercontent.com/55450200/159152163-645ed7d5-a6ce-4c57-88f6-d1f662cc8042.jpg"
                alt=""
                className="category-img"
              />
            </div>
          </div>
          <div className="grid-3-col  category-1">
            <div
              onClick={() => {
                dispatch({ payload: "Strings", type: "CATEGORY" });
                navigate("/products");
              }}
            >
              <img
                src="https://user-images.githubusercontent.com/55450200/159152251-e9a9b391-ee31-4fcd-92a4-1e6d0beda608.jpg"
                alt=""
                className="category-img"
              />
            </div>

            <div
              onClick={() => {
                dispatch({ payload: "Tuner&Capo", type: "CATEGORY" });
                navigate("/products");
              }}
            >
              <img
                src="https://user-images.githubusercontent.com/55450200/159152244-3d1c6776-0f39-45e1-9267-1121bc0c8bb0.jpg"
                alt=""
                className="category-img"
              />
            </div>

            <div
              onClick={() => {
                dispatch({ payload: "Strap&Stand", type: "CATEGORY" });
                navigate("/products");
              }}
            >
              <img
                src="https://user-images.githubusercontent.com/55450200/159152200-df70d23f-a166-4a85-965a-4090f1228ab6.jpg"
                alt=""
                className="category-img"
              />
            </div>
          </div>
        </div>
      </main>

      <section className="newsletter">
        <div>
          <p className="newsletter-title">
            Subscribe to our weekly Newsletter to get exciting Deal
          </p>
          <input type="email" className="newsletter-input" />
          <button className="newsletter-btn">Subscribe</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export { Home };
