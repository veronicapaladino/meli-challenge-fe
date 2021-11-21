const formatPrice = (price: { toLocaleString: (arg0: string, arg1: { style: string; currency: string; }) => any }, currency_id: string) =>
price.toLocaleString("es-AR", {
  style: "currency",
  currency: currency_id,
});

export default formatPrice;