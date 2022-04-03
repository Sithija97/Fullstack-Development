import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, price } = product;
    return (
      <Link>
        <div>
          <p>{title}</p>
        </div>
      </Link>
    );
  });
  return <>{renderList}</>;
};

export default Product;
