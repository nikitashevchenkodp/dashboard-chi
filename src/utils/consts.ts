import user1 from '../asset/customers_avatarr/customer_1.svg';
import user2 from '../asset/customers_avatarr/customer_2.svg';
import user3 from '../asset/customers_avatarr/customer_3.svg';
import user4 from '../asset/customers_avatarr/customer_4.svg';
import user5 from '../asset/customers_avatarr/customer_5.svg';
import user6 from '../asset/customers_avatarr/customer_6.svg';
import user7 from '../asset/customers_avatarr/customer_7.svg';
import user8 from '../asset/customers_avatarr/customer_8.svg';

export const PATHS = {
  LOGIN_PAGE: '/login',
  SIGNUP_PAGE: '/signup',
  RESET_PASSWORD_PAGE: '/resetpassword',
  FORGOT_PASSWORD_PAGE: '/forgotpassword',
  ADMIN_PAGE: '/admin/*',
};

export const cellTitles = ['Ticket details', 'Customer name', 'Date', 'Priority'];

export type TickerItem = {
  id: number;
  image?: any;
  details_text: string;
  name: string;
  date: string;
  status: string;
  // update?: {
  //   date?: string;
  //   time?: string;
  // };
};

const bodyData: TickerItem[] = [
  {
    id: 1,
    image: user1,
    details_text: 'Contact Email not Linked',
    name: 'Tom Cruise',
    date: 'May 26, 2019',
    status: 'high',
    // update: {
    //   date: '24.05.2019',
    //   time: '6:30PM',
    // },
  },
  {
    id: 2,
    image: user2,
    details_text: 'Contact Email not Linked',
    name: 'Tom Cruise',
    date: 'May 26, 2019',
    status: 'low',
    // update: {
    //   date: '24.05.2019',
    //   time: '6:30PM',
    // },
  },
  {
    id: 3,
    image: user3,
    details_text: 'Contact Email not Linked',
    name: 'Tom Cruise',
    date: 'May 26, 2019',
    status: 'normal',
    // update: {
    //   date: '24.05.2019',
    //   time: '6:30PM',
    // },
  },
  {
    id: 4,
    image: user4,
    details_text: 'Contact Email not Linked',
    name: 'Tom Cruise',
    date: 'May 26, 2019',
    status: 'high',
    // update: {
    //   date: '24.05.2019',
    //   time: '6:30PM',
    // },
  },
  {
    id: 5,
    image: user5,
    details_text: 'Contact Email not Linked',
    name: 'Tom Cruise',
    date: 'May 26, 2019',
    status: 'high',
    // update: {
    //   date: '24.05.2019',
    //   time: '6:30PM',
    // },
  },
  {
    id: 6,
    image: user6,
    details_text: 'Contact Email not Linked',
    name: 'Tom Cruise',
    date: 'May 26, 2019',
    status: 'high',
    // update: {
    //   date: '24.05.2019',
    //   time: '6:30PM',
    // },
  },
  {
    id: 7,
    image: user7,
    details_text: 'Contact Email not Linked',
    name: 'Tom Cruise',
    date: 'May 26, 2019',
    status: 'high',
    // update: {
    //   date: '24.05.2019',
    //   time: '6:30PM',
    // },
  },
  {
    id: 8,
    image: user8,
    details_text: 'Contact Email not Linked',
    name: 'Tom Cruise',
    date: 'May 26, 2019',
    status: 'high',
    // update: {
    //   date: '24.05.2019',
    //   time: '6:30PM',
    // },
  },
];

export function getData() {
  return new Promise<TickerItem[]>((resolve) => {
    resolve(bodyData);
  });
}

export function getItem(id: number) {
  const item = bodyData.filter((item) => item.id === id)[0];
  return new Promise<TickerItem>((resolve) => {
    resolve(item);
  });
}
