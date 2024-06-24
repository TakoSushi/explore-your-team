import { configureStore } from '@reduxjs/toolkit';
import { teamListApi } from '../../utils/api/TeamListApi';
import { memberApi } from '../../utils/api/MemberApi';
import { authApi } from '../../utils/api/AuthApi';

export const store = configureStore({
  reducer: {
    [teamListApi.reducerPath]: teamListApi.reducer,
    [memberApi.reducerPath]: memberApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      teamListApi.middleware,
      memberApi.middleware,
      authApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
