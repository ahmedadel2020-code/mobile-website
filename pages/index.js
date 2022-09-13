import { server } from "../config";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ImagesSlider from "../components/ImagesSlider";

export default function Home({ images }) {
  return (
    <div>
      <Head>
        <title>mobile website</title>
        <meta name="keywords" content="web" />
      </Head>
      <ImagesSlider images={images} />
    </div>
  );
}

// fetch images
export const getStaticProps = async () => {
  const res = await fetch(`https://63189f2cf6b281877c71eab0.mockapi.io/slider`);
  const images = await res.json();
  return {
    props: {
      images,
    },
  };
};
