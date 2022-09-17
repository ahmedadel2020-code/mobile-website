import productStyles from "../styles/Products.module.css";
import Link from "next/link";
import Image from "next/image";

const ProductItem = ({ product }) => {
  return (
    <Link href="/product/[id]" as={`/product/${product.id}`}>
      <a className={productStyles.product_container}>
        <img
          className={productStyles.product_img}
          src={product.img[0]}
          alt={product.name}
        />
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
