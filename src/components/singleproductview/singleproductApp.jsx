import { useParams } from "react-router";
import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import SingleProductNav from "./singleproductNav";
import SingleProductMenu from "./singleproductMenu";

const SingleProductApp = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);

  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found.</p>;

  return (
    <main>
      <SingleProductNav product={product} />
      <SingleProductMenu product={product} />
    </main>
  );
};

export default SingleProductApp;
