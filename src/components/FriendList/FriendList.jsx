import style from './FriendList.module.css';
import PropTypes, { arrayOf } from 'prop-types';
import { FriendListItem } from "./FriendListItem";

export function FriendList({ friends }) {
  return (
    <ul className={style.friend__list}>
      {friends.map(({ id, ...friend }) => (
        <FriendListItem key={id} {...friend} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: arrayOf(PropTypes.object).isRequired,
};