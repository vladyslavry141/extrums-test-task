import { ErrorMessage } from '../../../shared/components/ErrorMessage';
import { Loader } from '../../../shared/components/Loader';
import { CounterHistoryTable } from '../components/CounterHistoryTable';
import { useCounterGetHistoryQuery } from '../services/counter/hooks';

export interface CounterHistoryProps {}

export const CounterHistory: React.FC<CounterHistoryProps> = () => {
  const { isLoading, data, error, refetch } = useCounterGetHistoryQuery();

  if (isLoading || !data) return <Loader />;

  if (error) return <ErrorMessage message={(error as Error).message} />;

  return (
    <div>
      <CounterHistoryTable history={data} />
      <button
        onClick={(e) => {
          e.preventDefault();
          refetch();
        }}
      >
        Update
      </button>
    </div>
  );
};
