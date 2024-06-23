import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { memberApi } from '../../utils/api/MemberApi';
import styles from './styles/index.module.css';
import { routePaths } from '../../utils/constants/routePaths';

export function HeaderCom() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const userId = Number(id) ?? 0;
  const { data } = memberApi.endpoints.getMemberById.useQueryState(userId);

  const hadleClick = () => {
    localStorage.clear();
    navigate(`/${routePaths.auth.signIn}`);
  };

  return (
    <header className={styles.header}>
      {location.pathname === '/' ? (
        <div className={styles.headerTitleBlock}>
          <h1 className={styles.headerTitle}>Наша команда</h1>
          <h2 className={styles.headerSubtitle}>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.
          </h2>
        </div>
      ) : (
        <>
          <div className={styles.memberHeaderInfo}>
            <img className={styles.memberImg} src={data?.avatar} alt="member" />
            <div>
              <p
                className={styles.memberName}
              >{`${data?.first_name} ${data?.last_name}`}</p>
              <p className={styles.memberStatus}>{data?.id}</p>
            </div>
          </div>
          <Link className={`${styles.backBtn} ${styles.headerBtn}`} to="/">
            Назад
          </Link>
        </>
      )}

      <button
        className={`${styles.exitBtn} ${styles.headerBtn}`}
        type="button"
        onClick={() => hadleClick()}
      >
        Выход
      </button>
    </header>
  );
}
