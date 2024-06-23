import { Link, matchPath, useLocation } from 'react-router-dom';
import { routePaths } from '../../utils/constants/routePaths';

import styles from './styles/index.module.css';

type TAuthLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function AuthLayout({ title, children }: TAuthLayoutProps) {
  const location = useLocation();
  const isMatch = matchPath(routePaths.auth.signIn, location.pathname);

  return (
    <main className={styles.authLayoutMain}>
      <div className={styles.authLayout}>
        <h2>{title}</h2>
        {children}
        <div className={styles.authLayoutFooter}>
          {isMatch ? (
            <p>
              Вы еще не зарегистрированны?
              <Link to={`/${routePaths.auth.signUp}`}>Регистрация</Link>
            </p>
          ) : (
            <p>
              Уже зарегистрированны?
              <Link to={`/${routePaths.auth.signIn}`}>Войти</Link>
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
