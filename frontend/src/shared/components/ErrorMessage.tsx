export interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = 'Ooops, error ocurred',
}) => {
  return <label>{message}</label>;
};
