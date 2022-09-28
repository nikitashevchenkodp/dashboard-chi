import { CustomerItem, TickerItem } from './consts';

export const filterTickerFunction = (items: TickerItem[], filter: string) => {
  console.log('work filter function');

  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.details_text.toLowerCase().includes(filter.toLowerCase())
  );
};
export const filterCustomerFunction = (items: CustomerItem[], filter: string) => {
  return items.filter(
    (item) =>
      item.first_name.toLowerCase().includes(filter.toLowerCase()) ||
      item.last_name.toLowerCase().includes(filter.toLowerCase()) ||
      item.email.toLowerCase().includes(filter.toLowerCase()) ||
      item.address.toLowerCase().includes(filter.toLowerCase())
  );
};
