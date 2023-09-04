import {
  UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import { CounterHistoryRecord } from '../../types';
import CounterService, { CounterValue } from './api';

export const useCounterGetQuery = (
  options: Omit<
    UseQueryOptions<CounterValue, Error>,
    'queryKey' | 'queryFn'
  > = {}
) =>
  useQuery<CounterValue, Error>({
    ...options,
    queryKey: 'counter',
    queryFn: async () => await CounterService.get(),
  });

export const useCounterGetHistoryQuery = (
  options: Omit<
    UseQueryOptions<CounterHistoryRecord[], Error>,
    'queryKey' | 'queryFn'
  > = {}
) =>
  useQuery<CounterHistoryRecord[], Error>({
    ...options,
    queryKey: 'counter/history',
    queryFn: async () =>
      await CounterService.getHistory().then(({ history }) => history),
  });

export const useCounterIncrementMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => await CounterService.increment(),
    onSuccess(data) {
      queryClient.setQueryData(['counter'], data);
    },
  });
};

export const useCounterDecrementMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => await CounterService.decrement(),
    onSuccess(data) {
      queryClient.setQueryData(['counter'], data);
    },
  });
};
