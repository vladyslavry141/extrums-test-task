import { apiCall } from '../../../../shared/utils/apiCall';
import { User } from '../../types';

export class ProfileService {
  async get() {
    const res = await apiCall('/v1/profile');

    return res as { user: User };
  }
}

export default new ProfileService();
