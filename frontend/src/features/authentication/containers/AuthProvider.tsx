import React, { useMemo, useState } from 'react';
import { AuthContext } from '../context/auth';
import { User } from '../types';

export interface AuthProviderProps {
  initialUser: User | null;
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({
  initialUser,
  children,
}) => {
  const [user, setUser] = useState<User | null>(initialUser);

  const contextValue = useMemo(
    () => ({
      user,
      login: (user: User) => {
        setUser(user);
      },
      logout: (onLogout: () => void) => {
        setUser((user) => user && null);
        onLogout();
      },
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
