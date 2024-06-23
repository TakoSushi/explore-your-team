import { Outlet } from 'react-router-dom';
import { HeaderCom } from '../HeaderCom/HeaderCom';

export function MainLayout() {
  return (
    <>
      <HeaderCom />
      <main>
        <Outlet />
      </main>
    </>
  );
}
