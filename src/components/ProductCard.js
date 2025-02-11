import React from "react";
import Link from "next/link";
import styles from "@/styles/Product.module.css";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={product.thumbnail}
          height={100}
          width={100}
        />
      </div>

      <div className={styles.detailsWrapper}>
        <div className={styles.heading}>
          <span className={styles.title}>{product.title}</span>
          <span className={styles.price}>£{product.price}</span>
        </div>
        <span className={styles.description}>{product.description}</span>
        <span className={styles.category}>{product.category}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
