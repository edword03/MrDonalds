export const currency = value => value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });

export const totalPriceItem = order => {
  const countTopping = order.topping && order.topping.filter(item => item.checked).length;
  const priceTopping = (order.price * 0.1) * countTopping;
  return(order.price + priceTopping) * order.count;
};

export const totalCurrent = orders => orders.reduce((result, order) => order.count + result, 0)
