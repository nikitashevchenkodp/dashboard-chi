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

export const sortFunctionTicker = (items: TickerItem[], sortType: string) => {
  switch (sortType) {
    case 'name':
      return [...items].sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    case 'priority':
      return [...items].sort((a, b) => changeToNumber(a.status) - changeToNumber(b.status));
    case 'date':
      return [...items].sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    default:
      return items;
  }
};
export const sortFunctionCustomer = (items: CustomerItem[], sortType: string) => {
  switch (sortType) {
    case 'name':
      return [...items].sort((a, b) => {
        if (a.first_name > b.first_name) {
          return 1;
        }
        if (a.first_name < b.first_name) {
          return -1;
        }
        return 0;
      });
    case 'date':
      return [...items].sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    default:
      return items;
  }
};
