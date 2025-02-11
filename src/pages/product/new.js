import ProductForm from "@/components/ProductForm";
import { useState } from "react";
import { useRouter } from "next/router";
import { useProductContext } from "@/context/ProductContext";
import { createProduct } from "@/lib/api";
import { v4 as uuidv4 } from "uuid";

export default function CreateProduct() {
  const { dispatch } = useProductContext();
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);

  const initialProduct = {
    title: "",
    price: "",
    description: "",
    category: "",
    thumbnail: "",
  };

  const handleSubmit = async (e, newProduct) => {
    e.preventDefault();
    setLoading(true);

    const productData = {
      ...newProduct,
      price: parseFloat(newProduct.price) || 0,
    };

    try {
      const data = await createProduct(productData);
      dispatch({ type: "ADD", payload: { ...data, id: uuidv4() } });
      push("/");
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductForm
      initialProduct={initialProduct}
      onSubmit={handleSubmit}
      loading={loading}
      buttonText="Create"
    />
  );
}