import { useState, useEffect } from "react";

const ProductForm = ({ initialProduct, onSubmit, loading, buttonText }) => {
    const [product, setProduct] = useState(initialProduct);

    useEffect(() => {
        setProduct(initialProduct);
    }, [initialProduct]);

    function handleChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e, product)}>
                <p >{buttonText} Product</p>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={product.title}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={product.price}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={product.description}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={product.category}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="thumbnail"
                    placeholder="Thumbnail URL"
                    value={product.thumbnail}
                    onChange={handleChange}
                />
                <button type="submit" disabled={loading}>
                    {loading ? `${buttonText}...` : buttonText}
                </button>
            </form>
        </div>
    );
};

export default ProductForm;