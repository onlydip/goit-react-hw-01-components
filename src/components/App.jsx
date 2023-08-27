import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistic/Statistic";
import user from '../jsjson/user.json';
import stat from '../jsjson/data.json';

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
    </div>
  );
};
