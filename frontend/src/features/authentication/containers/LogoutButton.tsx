import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AuthService from '../services/auth/api';

export interface LogoutButtonProps {}

export const LogoutButton: React.FC<LogoutButtonProps> = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    user && (
      <button
        onClick={(e) => {
          e.preventDefault();
          AuthService.signout().then(() => {
            logout(() => navigate('/login'));
          });
        }}
      >
        Logout
      </button>
    )
  );
};
