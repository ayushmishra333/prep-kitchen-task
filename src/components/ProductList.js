import Link from "next/link";
import ProductCard from "./ProductCard";
import { useProductContext } from "@/context/ProductContext";

export default function ProductList() {
  const { products } = useProductContext();

  return (
    <div>
      <div>
        <div>Collections</div>

        <Link href="/product/new">
          + Add Product
        </Link>
      </div>

      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}