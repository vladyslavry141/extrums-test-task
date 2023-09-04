import { useQuery } from 'react-query';
import ProfileService from './api';

export const useProfileGetQuery = () =>
  useQuery({
    queryKey: 'profile',
    queryFn: () => ProfileService.get(),
    retry: false,
  });
