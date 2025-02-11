import ProductCard from "./ProductCard";
import Link from "next/link";
import styles from "@/styles/Product.module.css";
import { useProductContext } from "@/context/ProductContext";

export default function ProductList() {
  const { products } = useProductContext(); 
  return (
    <div className={styles.listBox}>
      <div className={styles.nav}>
        <div className={styles.heading}>Collections</div>

        <Link href="/product/new" className={styles.button}>
          + Add Product
        </Link>
      </div>

      <div className={styles.list}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
