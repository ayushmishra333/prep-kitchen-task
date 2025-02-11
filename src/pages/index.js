import ProductList from "../components/ProductList";
import { Geist, Geist_Mono } from "next/font/google";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("API URL is not defined in environment variables.");
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/products`);
  const data = await res.json();

  return {
    props: { initialProducts: data.products },
  };
}

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <ProductList />
    </div>
  );
}