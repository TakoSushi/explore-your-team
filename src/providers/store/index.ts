import { configureStore } from '@reduxjs/toolkit';
import { usersListApi } from '../../utils/api/UsersListApi';
import { userApi } from '../../utils/api/UserApi';
import { authApi } from '../../utils/api/AuthApi';

export const store = configureStore({
  reducer: {
    [usersListApi.reducerPath]: usersListApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      usersListApi.middleware,
      userApi.middleware,
      authApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
