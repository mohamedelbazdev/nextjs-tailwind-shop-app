import Layout from "@/components/Layout";
import data from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import StarRatings from "react-star-ratings";

export default function ProductPage() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((prod) => prod.slug === slug);
  if (!product) {
    return <h2> Product Not Found</h2>;
  }
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Back To Products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-5">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            Layout="responsive"
            width={640}
            height={640}
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h2 className="text-bold text-2xl md:text-3xl pb-5">
                {product.name}
              </h2>
            </li>
            <li>Category : {product.category}</li>
            <li>Brand : {product.brand}</li>
            <li>
              <StarRatings
                rating={product.rating}
                starRatedColor="gold"
                changeRating={null}
                numberOfStars={5}
                name="rating"
                starDimension="15px"
                starSpacing="1px"
              />
              &nbsp; of {product.numReviews} Reviews
            </li>
            <li>
              <h3 className="font-bold mt-3">Description</h3>
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-4">
            <div className="flex justify-between mb-4">
              <p>Price</p>
              <p>$ {product.price}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Status</p>
              <p className="text-green-500">In Stock</p>
            </div>
            <button className="btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
