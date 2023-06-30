const currencyFormatter = new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" });

export function formatCurrency(price) {
  return currencyFormatter.format(price);
}
