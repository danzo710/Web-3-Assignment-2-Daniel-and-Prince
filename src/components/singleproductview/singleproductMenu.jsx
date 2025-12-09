import ProductImageSection from "./ProductImageSection";
import ColorsSelector from "./selectors/ColorSelector";
import SizesSelector from "./selectors/SizesSelector";
import QuantitySelector from "./selectors/QuantitySelector";
import AddToCartButton from "./AddToCartButton";
import SingleProductRelated from "./singleproductRelated";
import { useState } from "react";
const SingleProductMenu = (props) => {
  const product = props.product;
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  if (!product) return <p>Loading product...</p>;

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) setQuantity(value);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-none overflow-hidden">

          
          <ProductImageSection product={product} />

          <div className="p-8 sm:p-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{product.name}</h1>

            <div className="mb-8">
              <span className="text-5xl font-bold text-gray-900">${product.price}</span>
            </div>


            <div className="bg-gray-50 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide uppercase text-sm">
                Product Description
              </h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>


            {product.material && (
              <div className="mb-4">
                <span className="font-semibold text-gray-900">Material: </span>
                <span className="text-gray-700">{product.material}</span>
              </div>
            )}


            <ColorsSelector
              colors={product.color}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />


            <SizesSelector
              sizes={product.sizes}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />


            <QuantitySelector
              quantity={quantity}
              increment={incrementQuantity}
              decrement={decrementQuantity}
              handleChange={handleQuantityChange}
            />


            <AddToCartButton
              product={product}
              quantity={quantity}
              selectedSize={selectedSize}
              selectedColor={selectedColor}
            />
          </div>
        </div>


        <SingleProductRelated product={product} />
      </div>
    </div>
  );
};

export default SingleProductMenu