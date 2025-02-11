import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useProductContext } from "@/context/ProductContext";
import { updateProduct } from "@/lib/api";
import ProductForm from "@/components/ProductForm";

export default function EditProduct() {
  const { products, dispatch } = useProductContext();
  const { push, query } = useRouter();

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    thumbnail: "",
  });

  useEffect(() => {
    const existingProduct = products?.find((p) => String(p.id) === query.id);

    if (existingProduct) setProduct(existingProduct);
  }, [query.id, products]);

  const handleSubmit = async (e, updatedProduct) => {
    e.preventDefault();
    setLoading(true);
    const { id, ...updatedDetails } = updatedProduct;
    try {
      const data = await updateProduct(id, updatedDetails);
      dispatch({
        type: "UPDATE",
        payload: !data.message ? data : updatedProduct,
      });
      push("/");
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductForm
      initialProduct={product}
      onSubmit={handleSubmit}
      loading={loading}
      buttonText="Update"
    />
  );
}