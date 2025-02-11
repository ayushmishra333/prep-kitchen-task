import Link from "next/link";
import styles from "@/styles/Product.module.css";

export default function ProductDetails({ product, handleDelete }) {
  return (
    <div className={styles.detailsBox}>
      <div className={styles.details}>
        <div className={styles.left}>
          <div>
            <div className={styles.heading}>
              <div>{product.title}</div>
              <div>£{product.price}</div>
            </div>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.info}>
              <div className={styles.brand}>
                <span>Brand</span> <span>{product.brand}</span>
              </div>
              <div className={styles.rating}>
                <span>Rating</span> <span>{product.rating}</span>
              </div>
              <div className={styles.stock}>
                <span>Current stock</span> <span>{product.stock}</span>
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <Link href={`/product/edit/${product.id}`}>
              <button className={styles.button}>Edit</button>
            </Link>
            <button className={styles.button} onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <img src={product.thumbnail} width={"500px"} alt={product.title} />
        </div>
      </div>
    </div>
  );
}