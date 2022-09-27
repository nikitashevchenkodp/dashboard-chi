import { CustomerItem, TickerItem } from './consts';

export const filterTickerFunction = (items: TickerItem[], filter: string) => {
  const res = items.filter((item) => item.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0);
  return !res.length ? items : res;
};
export const filterCustomerFunction = (items: CustomerItem[], filter: string) => {
  const res = items.filter((item) => item.first_name.toLowerCase().indexOf(filter.toLowerCase()) >= 0);
  return !res.length ? items : res;
};
