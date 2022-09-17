import { useEffect, useState } from "react";
import productsStyles from "../styles/Products.module.css";
import Pagination from "./Pagination";
import ProductItem from "./ProductItem";

const Products = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);
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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePaginate = (pageDirection) => {
    if (
      pageDirection === "right" &&
      currentProducts.length === productsPerPage
    ) {
      setCurrentPage((prevState) => prevState + 1);
    } else if (pageDirection === "left" && indexOfFirstProduct !== 0) {
      setCurrentPage((prevState) => prevState - 1);
    }
  };

  return (
    <div>
      {windowSize.width < 450 ? (
        <div className={productsStyles.products_wrapper}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className={productsStyles.products_wrapper}>
          {currentProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={handlePaginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Products;
