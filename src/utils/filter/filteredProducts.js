const filterProducts = (products, currentFilters) => {
  return products.filter((product) => {

    if (
      currentFilters.genders.length > 0 &&
      !currentFilters.genders.includes(product.gender)
    ) {
      return false;
    }

    if (
      currentFilters.categories.length > 0 &&
      !currentFilters.categories.includes(product.category)
    ) {
      return false;
    }

    if (
      currentFilters.sizes.length > 0 &&
      !currentFilters.sizes.some((size) => product.sizes.includes(size))
    ) {
      return false;
    }

    if (
      currentFilters.colors.length > 0 &&
      !currentFilters.colors.some((color) =>
        product.color.some((c) => c.name === color)
      )
    ) {
      return false;
    }

    return true;
  });
};

export { filterProducts };
