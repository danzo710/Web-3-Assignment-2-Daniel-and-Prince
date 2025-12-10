import ShoppingCartTable from "./shoppingcartTable";
import ShoppingCartSummary from "./shoppingcartSummary";
import Shipping from "./shoppingcartShipping";
import { useCart } from "../../context/cartContext";
import { useShipping } from "../../context/shippingContext";

const ShoppingCartApp = () => {
  const { cartItems, removeItemFromCart, merchandiseSubtotal } = useCart();
  const { shippingCost } = useShipping();

  const tax = merchandiseSubtotal * 0.13;
  const total = merchandiseSubtotal + shippingCost + tax;

  return (
    <div className="min-h-screen bg-sky-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ShoppingCartTable
              cartItems={cartItems}
              onRemoveItem={removeItemFromCart}
            />
          </div>
          <div className="space-y-6">
            <ShoppingCartSummary
              merchandiseSubtotal={merchandiseSubtotal}
              shipping={shippingCost}
              tax={tax}
              total={total}
            />
            <Shipping />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartApp;
