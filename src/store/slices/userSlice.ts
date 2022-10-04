import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TickerItem } from '../../utils/consts';

export type User = {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
};

export type UserState = {
  user: User | null;
};

const initialState: UserState = {
  user: JSON.parse(localStorage.getItem('user')!) ? JSON.parse(localStorage.getItem('user')!) : null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state) => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          firstName: 'Nikita',
          lastName: 'Shevchenko',
          address: 'sdfsdf sdfsdf sdf sdf sdf sdf sdf sdfd f',
          email: 'nrcsdfsdf@gmail.com',
        })
      );
      state.user = {
        firstName: 'Nikita',
        lastName: 'Shevchenko',
        address: 'sdfsdf sdfsdf sdf sdf sdf sdf sdf sdfd f',
        email: 'nrcsdfsdf@gmail.com',
      };
    },
    cleanUser: (state) => {
      state.user = null;
    },
  },
});

export const { cleanUser, setUser } = userSlice.actions;
export default userSlice.reducer;
