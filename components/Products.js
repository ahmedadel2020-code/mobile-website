import productsStyles from "../styles/Products.module.css";
import ProductItem from "./ProductItem";

const Products = ({ products }) => {
  console.log("Products", products);

  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
