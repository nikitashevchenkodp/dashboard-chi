import React, { createContext, useContext, useEffect, useState } from 'react';
import { getData, TickerItem } from './utils/consts';

type ContextValues = {
  user: boolean;
  authUser: (user: boolean) => void;
};

type MainContextWrapperProps = { children: React.ReactNode };

const MainContext = createContext({} as ContextValues);

const getUserFromLocalStorage = () => {
  return !!localStorage.getItem('user');
};

export const MainContexWrapper = ({ children }: MainContextWrapperProps) => {
  const [user, setUser] = useState<boolean>(() => getUserFromLocalStorage());

  const authUser = () => {
    localStorage.setItem('user', 'true');
    setUser(true);
  };

  return <MainContext.Provider value={{ user, authUser }}>{children}</MainContext.Provider>;
};

export const MainState = () => {
  return useContext(MainContext);
};
