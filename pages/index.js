import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>mobile website</title>
        <meta name="keywords" content="web" />
      </Head>
      <h1 className={styles.title}>Mac</h1>
    </div>
  );
}
