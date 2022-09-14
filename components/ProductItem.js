import productStyles from "../styles/Products.module.css";
import Link from "next/link";

const ProductItem = ({ product }) => {
  return (
    <Link href="/product/[id]" as={`/product/${product.id}`}>
      <a>{product.name}</a>
    </Link>
  );
};

export default ProductItem;
