const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://dummyjson.com/products";

if (!API_URL) {
  throw new Error("API URL is not defined in environment variables.");
}

/**
 * Fetch all products
 */
export async function fetchProducts() {
  const res = await fetch(`${API_URL}`);
  return res.json();
}

/**
 * Fetch a single product by ID
 * @param {string} id
 */
export async function fetchProductById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

/**
 * Create a new product
 * @param {object} productData
 */
export async function createProduct(productData) {
  const res = await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });
  return res.json();
}

/**
 * Update a product by ID
 * @param {string} id
 * @param {object} updatedData
 */
export async function updateProduct(id, updatedData) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return res.json();
}

/**
 * Delete a product by ID
 * @param {string} id
 */
export async function deleteProduct(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return res.json();
}