import { createContext, useState, useEffect } from "react";

const ProductsContext = createContext();

const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState({
    genders: [],
    categories: [],
    sizes: [],
    colors: [],
  });

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        selectedFilters,
        setSelectedFilters,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
