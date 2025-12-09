import { calculateSalesData } from "../utils/sales/calculateSalesData";

const SalesOverview = (props) => {

  if (!props.product || !props.product.sales) return null;

  const { domestic, international, total } = calculateSalesData(
    props.product.sales,
    props.product.price,
    props.product.cost
  );

  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-lg font-semibold">Sales Overview</h3>

      <div>
        <h4 className="font-medium">Domestic</h4>
        <ul className="ml-4 list-disc">
          <li>Gross: ${domestic.gross.toFixed(2)}</li>
          <li>Cost: ${domestic.cost.toFixed(2)}</li>
          <li>Profit: ${domestic.profit.toFixed(2)}</li>
        </ul>
      </div>

      <div>
        <h4 className="font-medium">International</h4>
        <ul className="ml-4 list-disc">
          <li>Gross: ${international.gross.toFixed(2)}</li>
          <li>Cost: ${international.cost.toFixed(2)}</li>
          <li>Profit: ${international.profit.toFixed(2)}</li>
        </ul>
      </div>

      <div>
        <h4 className="font-medium">Total</h4>
        <ul className="ml-4 list-disc">
          <li>Gross: ${total.gross.toFixed(2)}</li>
          <li>Cost: ${total.cost.toFixed(2)}</li>
          <li>Profit: ${total.profit.toFixed(2)}</li>
        </ul>
      </div>
    </div>
  );
};

export { SalesOverview };
