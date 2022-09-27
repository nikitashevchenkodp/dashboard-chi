import { TickerItem } from './consts';

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

export const sortFunction = (items: TickerItem[], sortType: string) => {
  switch (sortType) {
    case 'name':
      return items.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    case 'priority':
      return items.sort((a, b) => changeToNumber(a.status) - changeToNumber(b.status));
    default:
      return items;
  }
};
