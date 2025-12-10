import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableCaption,
} from "@/components/ui/table";

import { calculateSalesData } from "../../utils/sales/calculateSalesData";

export const AdminTable = ({ product }) => {
  if (!product || !product.sales) return null;

  const { domestic, international, total } = calculateSalesData(
    product.sales,
    product.price,
    product.cost
  );
  const rows = [
    { label: "Domestic", ...domestic },
    { label: "International", ...international },
    { label: "Total", ...total },
  ];

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-900">Sales Overview</h3>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[140px]">Region</TableHead>
            <TableHead className="text-right">Gross</TableHead>
            <TableHead className="text-right">Cost</TableHead>
            <TableHead className="text-right">Profit</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.label}>
              <TableCell className="font-medium">{row.label}</TableCell>
              <TableCell className="text-right">
                ${row.gross.toFixed(2)}
              </TableCell>
              <TableCell className="text-right">
                ${row.cost.toFixed(2)}
              </TableCell>
              <TableCell className="text-right">
                ${row.profit.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
