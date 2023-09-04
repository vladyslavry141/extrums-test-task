import React from 'react';
import { User } from '../types';

export const AuthContext = React.createContext<{
  user: null | User;
  login: (user: User) => void;
  logout: (onLogout: () => void) => void;
}>(null!);
