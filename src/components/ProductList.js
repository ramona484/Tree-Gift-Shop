import React from "react";
import "./TreeCard.css";
import "./Search.css";
import TreeCard from "./TreeCard";
import Search from "./Search";
import { useState } from "react";
import Filters from "./Filters";

function ProductList(props) {
  const [products, setProducts] = useState(props.products);
  function handleChange(e) {
    var filteredProductList = props.products.filter(
      (product) =>
        product.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
    );
    setProducts(filteredProductList);
  }

  function sortByPriceDescending() {
    let newProducts = [...products];
    let sorted = newProducts.sort((a, b) => b.price - a.price);
    setProducts(sorted);
  }

  function sortByPriceAscending() {
    let newProducts = [...products];
    let sorted = newProducts.sort((a, b) => a.price - b.price);
    setProducts(sorted);
  }

  function sortByName() {
    let newProducts = [...products];
    let sorted = newProducts.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(sorted);
  }

  function sortByCoAscending() {
    let newProducts = [...products];
    let sorted = newProducts.sort((a, b) => a.co2 - b.co2);
    setProducts(sorted);
  }

  function sortByCoDescending() {
    let newProducts = [...products];
    let sorted = newProducts.sort((a, b) => b.co2 - a.co2);
    setProducts(sorted);
  }

  function handleCountryChange(e) {
    let sorted = [];
    let newProducts = [...props.products];
    newProducts.forEach((obj) => {
      if (obj.country.toLowerCase() === e.target.value) {
        return sorted.push(obj);
      } else if (e.target.value === "all") {
        return (sorted = newProducts);
      }
    });
    setProducts(sorted);
  }

  return (
    <div>
      <Search handleChange={handleChange} />
      <Filters
        priceDesc={sortByPriceDescending}
        priceAsc={sortByPriceAscending}
        sortByName={sortByName}
        co2Asc={sortByCoAscending}
        co2Desc={sortByCoDescending}
        selectCountry={handleCountryChange}
      />
      <TreeCard products={products} />
    </div>
  );
}

export default ProductList;
