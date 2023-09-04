import { useState } from 'react';
import { LoginData } from '../../services/auth/api';
import styles from './LoginForm.module.css';

export interface LoginFormProps {
  onSubmit?: (data: LoginData) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
}): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.({ email, password });
      }}
    >
      <label>
        Email:{' '}
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password:{' '}
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <input type="submit" value="Login" />
    </form>
  );
};
