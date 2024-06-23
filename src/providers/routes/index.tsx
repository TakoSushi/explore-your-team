import { createBrowserRouter, redirect } from 'react-router-dom';
import { Registration } from '../../pages/Registration/Registration';
import { Login } from '../../pages/Login/Login';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { MainLayout } from '../../components/MainLayout/MainLayout';
import { MemberInfoPage } from '../../pages/MemberInfoPage/MemberInfoPage';
import { TeamPage } from '../../pages/TeamPage/TeamPage';
import { routePaths } from '../../utils/constants/routePaths';
// import { useGetUserByIdQuery } from '../../utils/api/UserApi';

function isLocalStorageHveToken(key: string): boolean {
  return !!localStorage.getItem(key);
}

const router = createBrowserRouter([
  {
    path: routePaths.main,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    loader: async () => {
      if (!isLocalStorageHveToken('token')) {
        console.log('no token');
        return redirect(routePaths.main + routePaths.auth.signIn);
      }
      return true;
    },
    // action: rootAction,
    children: [
      {
        index: true,
        element: <TeamPage />,
      },
      {
        // path: 'routePaths.users.usersInfo',
        // loader: () => {
        //   const userInfo = useGetUserByIdQuery(1);
        //   return userInfo;
        // },
        path: routePaths.users.userInfo,
        element: <MemberInfoPage />,
      },
    ],
  },
  {
    path: routePaths.auth.signUp,
    element: <Registration />,
    errorElement: <ErrorPage />,
    loader: async () => {
      if (isLocalStorageHveToken('token')) {
        return redirect(routePaths.main);
      }
      return true;
    },
  },
  {
    path: routePaths.auth.signIn,
    element: <Login />,
    errorElement: <ErrorPage />,
    loader: async () => {
      if (isLocalStorageHveToken('token')) {
        return redirect(routePaths.main);
      }
      return true;
    },
  },
]);

export { router };
