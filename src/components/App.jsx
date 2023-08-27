import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistic/Statistic";
import { FriendList } from "./FriendList/FriendList";
import {TransactionHistory} from './Transaction/TransactionHistory'
import user from '../jsjson/user.json';
import stat from '../jsjson/data.json';
import friends from '../jsjson/friends.json';
import transactions from '../jsjson/transactions.json';
export const App = () => {
  return (
    <div>
  <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stat} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
