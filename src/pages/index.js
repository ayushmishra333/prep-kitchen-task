import ProductList from "@/components/ProductList";
import { fetchProducts } from "@/lib/api";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function getServerSideProps() {
  try {
    const data = await fetchProducts();
    return { props: { initialProducts: data?.products ?? [] } };
  } catch {
    return { props: { initialProducts: [] } };
  }
}

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <ProductList />
    </div>
  );
}