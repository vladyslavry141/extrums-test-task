import { CounterHistoryRecord } from '../../types';

export interface CounterHistoryTableProps {
  history?: CounterHistoryRecord[];
}

export const CounterHistoryTable: React.FC<CounterHistoryTableProps> = ({
  history = [],
}): JSX.Element => {
  return (
    <table>
      <thead>
        <tr>
          <th>Value</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {history.map(({ value, date }) => (
          <tr key={date}>
            <td>{value}</td>
            <td>{date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
