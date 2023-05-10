import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, token }) => {
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};
