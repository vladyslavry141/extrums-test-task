import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginForm } from '../../features/authentication/components/LoginForm';
import { useAuth } from '../../features/authentication/hooks/useAuth';
import AuthService from '../../features/authentication/services/auth/api';
import styles from './LoginPage.module.css';

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [error, setError] = useState<Error | null>(null);

  const from = location.state?.from?.pathname || '/';

  return (
    <main className={styles.main}>
      <LoginForm
        onSubmit={(data) => {
          AuthService.signin(data)
            .then((data) => {
              login(data);
              setError(null);
              navigate(from, { replace: true });
            })
            .catch((error) => setError(error));
        }}
      />
      {error && <label>{error.message}</label>}
    </main>
  );
};
