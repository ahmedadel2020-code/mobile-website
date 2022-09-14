const Product = ({ product }) => {
  return <div>This is a product {product.name}</div>;
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://63189f2cf6b281877c71eab0.mockapi.io/products/${context.params.id}`
  );

  const product = await res.json();

  return {
    props: {
      product,
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
