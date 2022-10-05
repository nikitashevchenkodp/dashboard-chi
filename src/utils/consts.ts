import { user1, user2, user3, user4, user5, user6, user7, user8 } from '../asset';

export const PATHS = {
  LOGIN_PAGE: '/login',
  SIGNUP_PAGE: '/signup',
  RESET_PASSWORD_PAGE: '/resetpassword',
  FORGOT_PASSWORD_PAGE: '/forgotpassword',
  ADMIN_PAGE: '/admin/*',
};

export const tickerCellTitles = ['Ticket details', 'Customer name', 'Date', 'Priority'];
export const customersCellTitles = ['Name', 'Email', 'Address', 'Created at'];

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

export type CustomerItem = {
  id: number;
  image?: any;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  date: string;
};

const customerBodyData: CustomerItem[] = [
  {
    id: 11,
    image: user1,
    first_name: 'Tom',
    last_name: 'Cruise',
    email: 'mandeep.walton@gmail.com',
    address: 'Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate,B98 9PA',
    date: new Date(new Date().setDate(29)).toDateString(),
  },
  {
    id: 12,
    image: user2,
    first_name: 'Elena',
    last_name: 'Sheldon',
    email: 'elena.sheldon@gmail.com',
    address: 'South Lodge, Reddish Lane, Lymm,WA13 9PY',
    date: new Date(new Date().setDate(28)).toDateString(),
  },
  {
    id: 13,
    image: user3,
    first_name: 'Kim',
    last_name: 'Gould',
    email: 'kim.gould@gmail.com',
    address: 'Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate,B98 9PA',
    date: new Date(new Date().setDate(21)).toDateString(),
  },
  {
    id: 14,
    image: user4,
    first_name: 'Tom',
    last_name: 'Cruise',
    email: 'mandeep.walton@gmail.com',
    address: 'South Lodge, Reddish Lane, Lymm,WA13 9PY',
    date: new Date().toUTCString(),
  },
  {
    id: 15,
    image: user5,
    first_name: 'Elena',
    last_name: 'Sheldon',
    email: 'elena.sheldon@gmail.com',
    address: 'Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate,B98 9PA',
    date: new Date().toUTCString(),
  },
  {
    id: 16,
    image: user6,
    first_name: 'Kim',
    last_name: 'Gould',
    email: 'kim.gould@gmail.com',
    address: 'South Lodge, Reddish Lane, Lymm,WA13 9PY',
    date: new Date().toUTCString(),
  },
  {
    id: 17,
    image: user7,
    first_name: 'Tom',
    last_name: 'Cruise',
    email: 'mandeep.walton@gmail.com',
    address: 'Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate,B98 9PA',
    date: new Date().toUTCString(),
  },
  {
    id: 18,
    image: user8,
    first_name: 'Elena',
    last_name: 'Sheldon',
    email: 'elena.sheldon@gmail.com',
    address: 'South Lodge, Reddish Lane, Lymm,WA13 9PY',
    date: new Date().toUTCString(),
  },
  {
    id: 19,
    image: user1,
    first_name: 'Kim',
    last_name: 'Gould',
    email: 'kim.gould@gmail.com',
    address: 'Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate,B98 9PA',
    date: new Date().toUTCString(),
  },
];

const tickerBodyData: TickerItem[] = [
  {
    id: 1,
    image: user1,
    details_text: 'Contact Email not Linked',
    name: 'Elena Cruise',
    date: new Date().toUTCString(),
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
    name: 'MashaCruise',
    date: new Date().toUTCString(),
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
    name: 'Ivan Cruise',
    date: new Date().toUTCString(),
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
    date: new Date().toUTCString(),
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
    name: 'Ostap Cruise',
    date: new Date().toUTCString(),
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
    date: new Date().toUTCString(),
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
    name: 'Alex Cruise',
    date: new Date().toUTCString(),
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
    date: new Date().toUTCString(),
    status: 'high',
    // update: {
    //   date: '24.05.2019',
    //   time: '6:30PM',
    // },
  },
];

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function getTickerData(): Promise<TickerItem[]> {
  await delay(1000);
  const res = await fetch('http://localhost:3000/tickets');
  return res.json();
}
export async function getCustomerData(): Promise<CustomerItem[]> {
  await delay(1000);
  const res = await fetch('http://localhost:3000/customers');
  return res.json();
}

export const paginationIndexes = (page: number, perPage: number) => {
  return [(page - 1) * perPage, (page - 1) * perPage + perPage];
};

export async function getCustomer(id: number) {
  await delay(500);
  const res = await fetch(`http://localhost:3000/customers/${id}`);
  return res.json();
}

export async function getTicker(id: number) {
  await delay(500);
  const res = await fetch(`http://localhost:3000/tickets/${id}`);
  return res.json();
}

export async function delTicket(id: number) {
  await delay(500);
  const res = await fetch(`http://localhost:3000/tickets/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('eroooororor');
  return res.json();
}
export async function delCustomer(id: number) {
  await delay(500);
  const res = await fetch(`http://localhost:3000/customers/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('eroooororor');
  return res.json();
}

export async function addTicket(id: number) {
  await delay(500);
  const res = await fetch(`http://localhost:3000/tickets/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('eroooororor');
  return res.json();
}

// const convert = (items: any) => {
//   let res = '';
//   items.forEach((item: any) => {
//     res += JSON.stringify(item);
//   });
//   return res;
// };
// console.log(convert(tickerBodyData));
