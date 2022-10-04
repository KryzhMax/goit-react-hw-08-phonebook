import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectToken } from 'redux/auth/authSelectors';

const PublicRoute = ({ children, restricted = false }) => {
  const token = useSelector(selectToken);
  const shouldBeRedirected = token && restricted;
  return shouldBeRedirected ? <Navigate to="/contacts" /> : children;
};

export default PublicRoute;
