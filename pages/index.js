import { server } from "../config";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ImagesSlider from "../components/ImagesSlider";
import Products from "../components/Products";

export default function Home({ images, products }) {
  return (
    <div>
      <Head>
        <title>mobile website</title>
        <meta name="keywords" content="web" />
      </Head>
      <ImagesSlider images={images} />
      <h2 className={styles.title}>Explore Products</h2>
      <Products products={products} />
    </div>
  );
}

// fetch images
export const getStaticProps = async () => {
  const resImgs = await fetch(
    `https://63189f2cf6b281877c71eab0.mockapi.io/slider`
  );

  const resProducts = await fetch(
    `https://63189f2cf6b281877c71eab0.mockapi.io/products`
  );

  const images = await resImgs.json();
  const products = await resProducts.json();

  return {
    props: {
      images,
      products,
    },
  };
};
