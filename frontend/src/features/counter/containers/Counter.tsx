import { useState } from 'react';
import { ErrorMessage } from '../../../shared/components/ErrorMessage';
import { Loader } from '../../../shared/components/Loader';
import { CounterForm } from '../components/CounterForm';
import {
  useCounterDecrementMutation,
  useCounterGetQuery,
  useCounterIncrementMutation,
} from '../services/counter/hooks';

export interface CounterProps {}

export const Counter: React.FC<CounterProps> = () => {
  const { isLoading, data, error } = useCounterGetQuery({
    refetchInterval: 60 * 1000,
  });
  const incrementMutation = useCounterIncrementMutation();
  const decrementMutation = useCounterDecrementMutation();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (isLoading || !data) return <Loader />;
  if (error) return <ErrorMessage message={(error as Error).message} />;

  return (
    <CounterForm
      value={data.value}
      errorMessage={errorMessage}
      onIncrement={() =>
        incrementMutation
          .mutateAsync()
          .then(() => setErrorMessage(null))
          .catch((err) => setErrorMessage(err.message))
      }
      onDecrement={() =>
        decrementMutation
          .mutateAsync()
          .then(() => setErrorMessage(null))
          .catch((err) => setErrorMessage(err.message))
      }
    />
  );
};
