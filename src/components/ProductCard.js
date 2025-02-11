import React from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div >
        <img
          src={product.thumbnail}
          height={100}
          width={100}
        />
      </div>

      <div>
        <div>
          <span>{product.title}</span>
          <span>£{product.price}</span>
        </div>
        <span>{product.description}</span>
        <span>{product.category}</span>
      </div>
    </Link>
  );
};

export default ProductCard;