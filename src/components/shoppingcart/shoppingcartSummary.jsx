import { useCart } from "../../context/cartContext";
import { useShipping } from "../../context/shippingContext";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

const ShoppingCartSummary = () => {
  const { merchandiseSubtotal, clearCart, cartItems } = useCart();
  const { shippingCost, destination } = useShipping();
  const navigate = useNavigate();

  const tax = destination === "canada" ? merchandiseSubtotal * 0.05 : 0;
  const total = merchandiseSubtotal + shippingCost + tax;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    toast.success("Checkout successful!");
    clearCart();

    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Summary</h2>
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-gray-700">
          <span>Merchandise</span>
          <span className="font-medium">${merchandiseSubtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Shipping</span>
          <span className="font-medium">${shippingCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Tax {destination === "canada" && "(5%)"}</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between text-lg font-bold text-gray-900">
            <span>Total</span>
            <span className="text-sky-600">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <Button
        onClick={handleCheckout}
        className="w-full bg-sky-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-sky-700 transition-colors shadow-md hover:shadow-lg"
      >
        Checkout
      </Button>
    </div>
  );
};

export default ShoppingCartSummary;
