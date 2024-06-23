import { nanoid } from 'nanoid';
import { MemberCard } from '../../components/MemberCard/MemberCard';
import { useGetUsersListByPageQuery } from '../../utils/api/UsersListApi';

import styles from './styles/index.module.css';

export function TeamPage() {
  const { data } = useGetUsersListByPageQuery(1);

  const handleClick = () => {
    console.log('показать еще');
  };

  return (
    <section className={styles.sectionTeamPage}>
      <ul className={styles.memberList}>
        {data?.map((user) => (
          <li key={nanoid()}>
            <MemberCard
              id={user.id}
              firstName={user.first_name}
              lastName={user.last_name}
              avatar={user.avatar}
            />
          </li>
        ))}
      </ul>
      <button type="button" className={styles.yetBtn} onClick={handleClick}>
        Показать еще
      </button>
    </section>
  );
}
