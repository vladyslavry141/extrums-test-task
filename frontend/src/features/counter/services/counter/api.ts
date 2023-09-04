import { apiCall } from '../../../../shared/utils/apiCall';
import { CounterHistoryRecord } from '../../types';

export interface CounterValue {
  value: number;
}

class CounterService {
  async get() {
    return await apiCall<CounterValue>('/v1/counter');
  }

  async increment() {
    return await apiCall<CounterValue>('/v1/counter/increment', {
      method: 'POST',
    });
  }

  async decrement() {
    return await apiCall<CounterValue>('/v1/counter/decrement', {
      method: 'POST',
    });
  }

  async getHistory() {
    return await apiCall<{ history: CounterHistoryRecord[] }>(
      '/v1/counter/history'
    );
  }
}

export default new CounterService();
