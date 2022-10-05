import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const localStorageUser = JSON.parse(localStorage.getItem('user')!);

export type User = {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
};

export type UserState = {
  user: User | null;
  loading: boolean;
  error: string;
};

const initialState: UserState = {
  user: localStorageUser ? localStorageUser : null,
  loading: false,
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    startLoginUser: (state) => {
      state.loading = true;
    },
    successLoginUser: (state) => {
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
    rejectLoginUser: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },
    cleanUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { cleanUser, startLoginUser, successLoginUser, rejectLoginUser } = userSlice.actions;
export default userSlice.reducer;
