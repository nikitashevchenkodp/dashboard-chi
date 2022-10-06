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
      state.user = {
        firstName: 'Nikita',
        lastName: 'Shevchenko',
        address: 'sdfsdf sdfsdf sdf sdf sdf sdf sdf sdfd f',
        email: 'nrcsdfsdf@gmail.com',
      };
      state.loading = false;
      state.error = '';
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
    editUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { cleanUser, startLoginUser, successLoginUser, rejectLoginUser, editUser } = userSlice.actions;
export default userSlice.reducer;
