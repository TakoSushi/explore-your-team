import { Link } from 'react-router-dom';
import { LikeBtn } from '../LikeBtn/LikeBtn';
import styles from './styles/index.module.css';

type TMemberCard = {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
};

export function MemberCard({ firstName, lastName, avatar, id }: TMemberCard) {
  return (
    <Link className={styles.memberCard} to={`user/${id}`}>
      <img
        className={styles.memberCardImg}
        src={avatar}
        alt={`${firstName} ${lastName}`}
      />
      <p className={styles.memberCardName}>
        {firstName} {lastName}
      </p>
      <div className={styles.likeBtnPosition}>
        <LikeBtn id={id} />
      </div>
    </Link>
  );
}
