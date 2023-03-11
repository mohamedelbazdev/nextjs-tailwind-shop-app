import Link from "next/link";
import React from "react";

export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`} legacyBehavior>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className=" rounded-t shadow"
          />
        </a>
      </Link>
      <div className="card-details">
        <div>
          <Link href={`/product/${product.slug}`} legacyBehavior>
            <a className="text-lg font-bold">
              <h3>{product.name}</h3>
            </a>
          </Link>
          <p className=" text-red-900 uppercase">{product.brand}</p>
        </div>
        <div>
          <p className="">$ {product.price}</p>
        </div>
      </div>
      <button type="button" class="btn-primary">
        Add to Cart
      </button>
    </div>
  );
}
