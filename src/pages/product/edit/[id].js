import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useProductContext } from "@/context/ProductContext";
import ProductForm from "@/components/ProductForm";

export default function EditProduct() {
    const { products, dispatch } = useProductContext();
    const router = useRouter();
    const { id } = router.query;

    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        thumbnail: "",
    });

    useEffect(() => {
        if (id && products) {
            const existingProduct = products.find(
                (p) => p.id === id || p.id === parseInt(id)
            );
            if (existingProduct) setProduct(existingProduct);
        }
    }, [id, products]);

    async function handleSubmit(e, updatedProduct) {
        e.preventDefault();
        setLoading(true);
        const { id, ...updatedDetails } = updatedProduct;
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedDetails),
            });

            const data = await response.json();

            dispatch({
                type: "UPDATE",
                payload: !data.message ? data : updatedProduct,
            });
            router.push("/");
        } catch (error) {
            console.error("Error updating product:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <ProductForm
            initialProduct={product}
            onSubmit={handleSubmit}
            loading={loading}
            buttonText="Update"
        />
    );
}