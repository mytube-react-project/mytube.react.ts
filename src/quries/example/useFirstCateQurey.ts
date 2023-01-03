import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { QueryKeyConsts } from 'libs/consts/qureyKey';

const useFistCateQuery = () => {
  const { data, isLoading, isSuccess, error } = useQuery(
    [QueryKeyConsts.GET_FIRST_CATE],
    () => axios.get('/api/cate').then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      onSuccess: (data) => {
        console.log('data', data);
      },
    },
  );

  return { data, isLoading, isSuccess, error };
};
export default useFistCateQuery;
