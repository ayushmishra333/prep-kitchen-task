import ProductDetails from "@/components/ProductDetails";
import { useProductContext } from "@/context/ProductContext";
import { deleteProduct } from "@/lib/api";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const { push, query } = useRouter();
  const { products, dispatch } = useProductContext();

  const product = products.find((p) => String(p.id) === query.id);
  if (!product) return <p>Product not found.</p>;

  const handleDelete = async () => {
    try {
      await deleteProduct(product.id);
      dispatch({ type: "DELETE", payload: product.id });
      push("/");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return <ProductDetails product={product} handleDelete={handleDelete} />;
}