import { apiCall } from '../../../../shared/utils/apiCall';
import { User } from '../../types';

export interface LoginData {
  email: string;
  password: string;
}

export class AuthService {
  async signin(data: LoginData) {
    const { user } = await apiCall<{ user: User; token: string }>(
      '/v1/auth/signin',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return user as User;
  }

  async signout() {
    await apiCall<{ user: User; token: string }>('/v1/auth/signout', {
      method: 'POST',
    });
  }
}

export default new AuthService();
