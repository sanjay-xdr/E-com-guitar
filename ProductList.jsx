import React, { useEffect, useState, useReducer, useContext } from "react";
import "./ProductList.css";
import { FilterContext } from "./context/filter-context";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

const ProductList = () => {
  const { filterData, state, dispatch } = useContext(FilterContext);

  const { sortBy, category, rating } = state;

  const totalItems = filterData.length;

  return (
    <>
      <Navbar />
      <div>
        <h3 className="font-xl">All products ({totalItems})</h3>
      </div>

      <div className="gs-container">
        <fieldset className="font-xl demo">
          <div>
            <div className="clear-filter">
              <h3 className="font-l">Price:</h3>
              <button
                className="clear-filter-btn"
                onClick={() =>
                  dispatch({
                    type: "clearFilter",
                    payload: { category: [], sortBy: null, rating: 0 },
                  })
                }
              >
                Clear
              </button>
            </div>

            <div className="flex">
              <input
                type="radio"
                name="sort"
                className="font-l"
                onChange={() =>
                  dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
                }
                checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
              />
              <label htmlFor="sort">
                {" "}
                <span className="font-l">High to Low</span>{" "}
              </label>{" "}
              <br />
              <input
                type="radio"
                name="sort"
                className="font-l"
                onChange={() =>
                  dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
                }
                checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
              />
              <label htmlFor="sort">
                {" "}
                <span className="font-l">Low to High</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="font-l">What you looking for:</h3>

            <div className="flex">
              <input
                type="checkbox"
                className="font-l"
                checked={category.includes("AcousticGuitar")}
                onChange={() =>
                  dispatch({ payload: "AcousticGuitar", type: "CATEGORY" })
                }
              />
              <span className="font-l">Acoustic Guitar</span>
            </div>

            <div className="flex">
              <input
                type="checkbox"
                className="font-l"
                checked={category.includes("Electric Guitar")}
                onChange={() =>
                  dispatch({ payload: "Electric Guitar", type: "CATEGORY" })
                }
              />
              <span className="font-l">Electric Guitar</span>
            </div>

            <div className="flex">
              <input
                type="checkbox"
                className="font-l"
                checked={category.includes("Tuner&Capo")}
                onChange={() =>
                  dispatch({ payload: "Tuner&Capo", type: "CATEGORY" })
                }
              />
              <span className="font-l">Tuner and Capo </span>
            </div>

            <div className="flex">
              <input
                type="checkbox"
                className="font-l"
                checked={category.includes("Strings")}
                onChange={() =>
                  dispatch({ payload: "Strings", type: "CATEGORY" })
                }
              />
              <span className="font-l">Guitar Strings </span>
            </div>

            <div className="flex">
              <input
                type="checkbox"
                className="font-l"
                checked={category.includes("Strap&Stand")}
                onChange={() =>
                  dispatch({ payload: "Strap&Stand", type: "CATEGORY" })
                }
              />
              <span className="font-l">Strap and Stand </span>
            </div>

            <div className="flex">
              <input
                type="checkbox"
                className="font-l"
                checked={category.includes("Picks/Plectrum")}
                onChange={() =>
                  dispatch({ payload: "Picks/Plectrum", type: "CATEGORY" })
                }
              />
              <span className="font-l">Guitar Plectrum</span>
            </div>
          </div>

          <div>
            <h3 className="font-l">Rating:</h3>

            <div className="flex">
              <input
                type="range"
                name="rating"
                min="1"
                max="5"
                value={rating}
                onChange={(event) =>
                  dispatch({ payload: event.target.value, type: "Rating" })
                }
              />
              <span className="font-l rating">{rating}</span>
            </div>
          </div>
        </fieldset>

        {/* make flex not grid as i dont know how to work with Grids  */}
        <div className="grid-2-col" id="product-container">
          {filterData &&
            filterData.map(({ title, _id, image, description, price }) => (
              <Card
                title={title}
                _id={_id}
                image={image}
                description={description}
                price={price}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export { ProductList };
