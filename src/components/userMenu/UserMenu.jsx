import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const name = useSelector(selectUserName);
  return (
    <div>
      <p>Hello {name}</p>
      <button>Logout</button>
    </div>
  );
};
