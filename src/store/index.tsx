import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';
import { IUser } from '../auth/authApi/types';
import {create} from 'zustand';

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
});

type Store={
    authUser: IUser | null;
  requestLoading: boolean;
  setAuthUser: (user: IUser | null) => void;
  setRequestLoading: (isLoading: boolean) => void;
}
const useStore = create<Store>((set) => ({
    authUser: null,
    requestLoading: false,
    setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
    setRequestLoading: (isLoading) =>
      set((state) => ({ ...state, requestLoading: isLoading })),
  }));

export default configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
