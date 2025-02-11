import { useRouter } from "next/router";
import { useProductContext } from "../../context/ProductContext";
import Link from "next/link";

export default function ProductDetail() {
    const { push, query } = useRouter();
    const { products, dispatch } = useProductContext();

    const product = products.find((p) => String(p.id) === query.id);

    if (!product) return <p>Product not found.</p>;

    return (
        <div>
            <div>{product.title}</div>
            <div>£{product.price}</div>

            <div>{product.description}</div>

            <span>Brand</span> <span>{product.brand}</span>
            <span>Rating</span> <span>{product.rating}</span>
            <span>Current stock</span> <span>{product.stock}</span>
            <div>
                <Link href={`/product/edit/${product.id}`}>
                    <button>Edit</button>
                </Link>
                <button
                    onClick={() => {
                        dispatch({ type: "DELETE", payload: product.id });
                        push("/");
                    }}
                >
                    Delete
                </button>
            </div>
            <div>
                <img src={product.thumbnail} width={"500px"} />
            </div>
        </div>
    );
}