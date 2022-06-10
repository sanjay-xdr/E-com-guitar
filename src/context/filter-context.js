import { createContext, useState, useEffect, useReducer } from "react";
import { FilterReducer } from "../reducer/filter-reducer";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [items, setData] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())

      .then((data) => {
        setData(data.products);
      });
  }, []);

  const [state, dispatch] = useReducer(FilterReducer, {
    sortBy: null,
    category: [],
    rating: 0,
  });

  const { sortBy, category, rating } = state;

  const getSortedData = (data, sortBy) => {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return data.slice().sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return data.slice().sort((a, b) => a["price"] - b["price"]);
    }

    return data;
  };

  const getFilterData2 = (sortedData, category, rating) => {
    if (category.length !== 0) {
      return sortedData.filter((a) => category.includes(a["categoryName"]));
    }
    if (rating) {
      return sortedData.filter((a) => a["rating"] == rating);
    } else return sortedData;
  };

  const sortedData = getSortedData(items, sortBy);

  const filterData = getFilterData2(sortedData, category, rating);

  return (
    <FilterContext.Provider value={{ filterData, state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
