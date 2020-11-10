export const currency = value => value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });

export const totalPriceItem = order => order.price * order.count;

export const totalCurrent = orders => orders.reduce((result, order) => order.count + result, 0)
