import { ProductProvider } from "@/context/ProductContext";

export default function App({ Component, pageProps }) {
  return (
    <ProductProvider initialProducts={pageProps.initialProducts || []}>
      <Component {...pageProps} />
    </ProductProvider>
  );
}