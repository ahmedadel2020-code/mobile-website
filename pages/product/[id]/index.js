import productStyles from "../../../styles/Product.module.css";
import Products from "../../../components/Products";
import YellowStar from "../../../asset/images/YellowStar.svg";
import WhiteStar from "../../../asset/images/WhiteStar.svg";
import CIBLogo from "../../../asset/images/CIBLogo.png";
import Shipping from "../../../asset/images/Shipping.svg";
import { useEffect, useState } from "react";
import Cube from "../../../asset/images/Cube.svg";
import Heart from "../../../asset/images/Heart.svg";
import Image from "next/image";

const Product = ({ product, products }) => {
  const yellowStars = [];
  const whiteStars = [];
  const totalStars = 5 - product.numberOfStars;
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

  for (let i = 0; i < product.numberOfStars; i++) {
    yellowStars.push(i);
  }

  for (let i = 0; i < totalStars; i++) {
    whiteStars.push(i);
  }

  return (
    <div>
      <div className={productStyles.container}>
        <div className={productStyles.imgs_Wrapper}>
          {windowSize.width > 450
            ? product.img.map((img, index) => (
                <Image
                  src={img}
                  alt={product.name}
                  key={index}
                  className={productStyles.pro_img_small}
                  width="80px"
                  height="80px"
                />
              ))
            : product.img.map((img, index) => (
                <div key={index} className={productStyles.pro_img_small}>
                  <Image
                    src={img}
                    alt={product.name}
                    width="32px"
                    height="32px"
                  />
                </div>
              ))}
        </div>
        {windowSize.width > 450 ? (
          <Image
            src={product.img[0]}
            alt={product.name}
            className={productStyles.pro_img_large}
            width="531px"
            height="531px"
          />
        ) : (
          <Image
            src={product.img[0]}
            alt={product.name}
            className={productStyles.pro_img_large}
            width="210px"
            height="210px"
          />
        )}
        <div className={productStyles.pro_details}>
          <div className={productStyles.pro_header}>
            <p className={productStyles.title}>APPLE</p>
            <Image src={Heart} alt="heart" />
          </div>
          <div>{product.name}</div>
          <div className={productStyles.stars}>
            {yellowStars.map((star) => (
              <Image src={YellowStar} alt="star" key={star} />
            ))}
            {whiteStars.map((star) => (
              <Image src={WhiteStar} alt="star" key={star} />
            ))}
            <span
              className={productStyles.review}
            >{`(${product.numberOfReviews} Reviews)`}</span>
          </div>
          <div
            className={`${productStyles.price} ${
              product.inStock > 0 ? productStyles.in_stock_price : ""
            }`}
          >{`$${product.price}`}</div>
          <div
            className={
              product.inStock > 0
                ? productStyles.in_stock
                : productStyles.out_of_stock
            }
          >
            {product.inStock > 0 ? "In Stock" : "Out of Stock"}
          </div>
          <div className={productStyles.quantity_wrapper}>
            <div className={productStyles.sign}>+</div>
            <div className={productStyles.quantity}>1</div>
            <div className={productStyles.sign}>-</div>
          </div>
          <div className={productStyles.attributes}>
            <div className={productStyles.attribute}>Full Price</div>
            <div className={productStyles.attribute}>Installments</div>
          </div>
          <div className={productStyles.attributes}>
            {[1, 2, 3, 4].map((cip, index) => (
              <div key={index} className={productStyles.attribute}>
                <Image src={CIBLogo} alt="CIB" />
              </div>
            ))}
          </div>
          <p>Memory</p>
          <div className={productStyles.attributes}>
            {["128GB", "256GB", "512GB", "1TB"].map((memory) => (
              <div
                key={memory}
                className={`${productStyles.attribute_memory} ${productStyles.attribute} `}
              >
                <div>{memory}</div>
                <div className={productStyles.attribute_price}>$999.00</div>
              </div>
            ))}
          </div>
          <p>Color</p>
          <div className={productStyles.attributes}>
            <div
              className={`${productStyles.attribute} ${productStyles.attribute_color}`}
            >
              <div>Silver</div>
              <div className={productStyles.attribute_color_gray}></div>
            </div>
            <div
              className={`${productStyles.attribute} ${productStyles.attribute_color}`}
            >
              <div>Sierra Blue</div>
              <div className={productStyles.attribute_color_blue}></div>
            </div>
          </div>
          <p>Insurance</p>
          <div className={productStyles.attributes}>
            <div
              className={`${productStyles.attribute} ${productStyles.attribute_insurance}`}
            >
              <div>1 year</div>
              <div className={productStyles.attribute_price}>$99.00</div>
            </div>
            <div
              className={`${productStyles.attribute} ${productStyles.attribute_insurance}`}
            >
              <div>2 year</div>
              <div className={productStyles.attribute_price}>$159.00</div>
            </div>
          </div>
          <button
            className={`${productStyles.cart_btn} ${
              product.inStock > 0 ? productStyles.in_stock_btn : ""
            }`}
          >
            Add to cart
          </button>
          <div className={productStyles.divider}></div>
          <div className={productStyles.ship_details}>
            <Image src={Shipping} alt="shipping" />
            <p>Free shipping, arrives by Tue, Nov 23</p>
          </div>
          <div className={productStyles.ship_details}>
            <Image src={Cube} alt="return" />
            <p>Free 10-day return window starts Dec 26th Details</p>
          </div>
        </div>
      </div>
      {windowSize.width <= 450 ? (
        <h2 className={productStyles.header}>Explore Products</h2>
      ) : null}
      <Products products={products} />
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://63189f2cf6b281877c71eab0.mockapi.io/products/${context.params.id}`
  );

  const resProducts = await fetch(
    `https://63189f2cf6b281877c71eab0.mockapi.io/products`
  );
  const products = await resProducts.json();

  const product = await res.json();

  return {
    props: {
      product,
      products,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://63189f2cf6b281877c71eab0.mockapi.io/products`
  );

  const products = await res.json();

  const ids = products.map((product) => product.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Product;
