import { useState } from "react";
import { useRouter } from "next/router";
import { useProductContext } from "@/context/ProductContext";
import ProductForm from "@/components/ProductForm";
import { v4 as uuidv4 } from "uuid";

export default function CreateProduct() {
    const { dispatch } = useProductContext();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const initialProduct = {
        title: "",
        price: "",
        description: "",
        category: "",
        thumbnail: "",
    };

    async function handleSubmit(e, newProduct) {
        e.preventDefault();
        setLoading(true);

        const productData = {
            ...newProduct,
            price: parseFloat(newProduct.price) || 0,
        };

        try {
            const response = await fetch("https://dummyjson.com/products/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productData),
            });

            const data = await response.json();
            dispatch({ type: "ADD", payload: { ...data, id: uuidv4() } });
            router.push("/");
        } catch (error) {
            console.error("Error adding product:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <ProductForm
            initialProduct={initialProduct}
            onSubmit={handleSubmit}
            loading={loading}
            buttonText="Create"
        />
    );
}