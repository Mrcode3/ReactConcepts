import React from "react";
import PropType from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, image, price }) => {
  const url = image && image.url; // method 2
  return (
    <article className="product">
      <h4>{name}</h4>
      <img src={url || defaultImage} alt={name} />
      <p>{price || 3.99}</p>
    </article>
  );
};

Product.PropType = {
  name: PropType.string.isRequired,
  image: PropType.object.isRequired,
  price: PropType.number.isRequired,
};

// -method 1-
// Product.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
