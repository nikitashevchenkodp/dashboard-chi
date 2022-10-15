import { CustomerItem, TickerItem } from './consts';

const changeToNumber = (priority: string) => {
  switch (priority) {
    case 'high':
      return 0;
    case 'normal':
      return 1;
    case 'low':
      return 2;
    default:
      return 0;
  }
};

export const sortFunction = (items: Array<CustomerItem & TickerItem>, sortType: string) => {
  switch (sortType) {
    case 'name':
      if (items[0].first_name) return [...items].sort((a, b) => (a.first_name > b.first_name ? 1 : -1));
      return [...items].sort((a, b) => (a.name > b.name ? 1 : -1));
    case 'priority':
      return [...items].sort((a, b) => changeToNumber(a.status) - changeToNumber(b.status));
    case 'date':
      return [...items].sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    default:
      return items;
  }
};
