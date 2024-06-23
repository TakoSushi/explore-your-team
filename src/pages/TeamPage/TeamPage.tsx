import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { MemberCard } from '../../components/MemberCard/MemberCard';
import { useGetTeamListByPageQuery } from '../../utils/api/TeamListApi';
import { Loader } from '../../components/Loader/Loader';

import styles from './styles/index.module.css';

export function TeamPage() {
  const [queryPageNubmer, setQueryPageNubmer] = useState(1);
  const { data, originalArgs, isLoading } =
    useGetTeamListByPageQuery(queryPageNubmer);

  useEffect(() => {
    if (Number(originalArgs) > queryPageNubmer) {
      setQueryPageNubmer(Number(originalArgs));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <section className={styles.sectionTeamPage}>
        <Loader />
      </section>
    );
  }

  const handleClick = () => {
    setQueryPageNubmer((prev) => prev + 1);
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
      {data && data.length > 0 && (
        <button type="button" className={styles.yetBtn} onClick={handleClick}>
          Показать еще
        </button>
      )}
    </section>
  );
}
