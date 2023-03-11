import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import data from "@/utils/data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout title="Home Page">
        <h1 className=" text-gray-700 mb-5 text-2xl font-bold md:text-3xl lg:text-4xl ml-2 md:ml-0">
          All Products :
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10 gap-1">
          {data.products.map((product) => {
            return (
              <ProductItem key={product.slug} product={product}></ProductItem>
            );
          })}
        </div>
      </Layout>
    </>
  );
}
