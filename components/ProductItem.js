import productStyles from "../styles/Products.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductItem = ({ product }) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <Link href="/product/[id]" as={`/product/${product.id}`}>
      <a className={productStyles.product_container}>
        {windowSize.width > 400 ? (
          <div className={productStyles.product_img}>
            <Image
              src={product.img[0]}
              alt={product.name}
              width="220px"
              height="220px"
            />
          </div>
        ) : (
          <div className={productStyles.product_img}>
            <Image
              src={product.img[0]}
              alt={product.name}
              width="117px"
              height="117px"
            />
          </div>
        )}
        <div className={productStyles.product_name}>{product.name}</div>
        {product.priceAfterdiscount !== product.price ? (
          <div className={productStyles.product_price_wrapper}>
            <div
              className={productStyles.product_discount}
            >{`$${product.priceAfterdiscount}.00`}</div>
            <div
              className={productStyles.product_price_original}
            >{`$${product.price}.00`}</div>
          </div>
        ) : (
          <div
            className={productStyles.product_price}
          >{`$${product.price}.00`}</div>
        )}
        <div
          className={
            product.inStock > 0
              ? productStyles.in_stock
              : productStyles.out_of_stock
          }
        >
          {product.inStock > 0 ? "In Stock" : "Out of Stock"}
        </div>
      </a>
    </Link>
  );
};

export default ProductItem;
