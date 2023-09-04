export interface CounterFormProps {
  value: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  errorMessage?: string | null;
}

export const CounterForm: React.FC<CounterFormProps> = ({
  value,
  onIncrement,
  onDecrement,
  errorMessage,
}): JSX.Element => {
  return (
    <div>
      <label>Value: {value}</label>
      <div>
        <button onClick={(e) => (e.preventDefault(), onIncrement?.())}>
          Increment
        </button>
        <button onClick={(e) => (e.preventDefault(), onDecrement?.())}>
          Decrement
        </button>
      </div>
      {errorMessage && <label>{errorMessage}</label>}
    </div>
  );
};
