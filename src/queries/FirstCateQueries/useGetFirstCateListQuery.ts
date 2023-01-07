import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { QueryKeyConsts } from 'libs/consts/qureyKey';
import { AxiosError } from 'axios';
import CustomAPiError from 'apis/@error';

const useGetFistCateListQuery = () => {
  const { data, isLoading, isSuccess, error, refetch } = useQuery(
    [QueryKeyConsts.GET_FIRST_CATE],
    () => axios.get('/api/cate').then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      onSuccess: (data: any) => {
        for (const cate of data) {
          cate.open = false;
        }
      },
      onError: (error: AxiosError) => {
        new CustomAPiError(error.message, error);
      },
    },
  );

  return { data, isLoading, isSuccess, error, refetch };
};

export default useGetFistCateListQuery;
