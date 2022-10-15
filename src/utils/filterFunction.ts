import { CustomerItem, TickerItem } from './consts';

export const filterFunction = (items: Array<CustomerItem & TickerItem>, filter: string) => {
  console.log(items);

  return items.filter(
    (item) =>
      item.first_name?.toLowerCase().includes(filter.toLowerCase()) ||
      item.last_name?.toLowerCase().includes(filter.toLowerCase()) ||
      item.email?.toLowerCase().includes(filter.toLowerCase()) ||
      item.address?.toLowerCase().includes(filter.toLowerCase()) ||
      item.name?.toLowerCase().includes(filter.toLowerCase()) ||
      item.details_text?.toLowerCase().includes(filter.toLowerCase())
  );
};
