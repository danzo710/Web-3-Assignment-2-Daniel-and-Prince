const sortProducts = (products, sortOption) => {
  const sorted = [...products];

  switch (sortOption) {
    case "name":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "price-asc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }

  return sorted;
};

export {sortProducts}
