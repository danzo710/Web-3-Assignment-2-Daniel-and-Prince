const calculateSalesData = (sales, price, cost) => {
  const domesticGross = sales.domestic * price;
  const domesticCost = sales.domestic * cost;
  const domesticProfit = domesticGross - domesticCost;

  const internationalGross = sales.international * price;
  const internationalCost = sales.international * cost;
  const internationalProfit = internationalGross - internationalCost;

  const totalGross = domesticGross + internationalGross;
  const totalCost = domesticCost + internationalCost;
  const totalProfit = totalGross - totalCost;

  return {
    domestic: {
      gross: domesticGross,
      cost: domesticCost,
      profit: domesticProfit
    },
    international: {
      gross: internationalGross,
      cost: internationalCost,
      profit: internationalProfit
    },
    total: {
      gross: totalGross,
      cost: totalCost,
      profit: totalProfit
    }
  };
};
export {calculateSalesData}