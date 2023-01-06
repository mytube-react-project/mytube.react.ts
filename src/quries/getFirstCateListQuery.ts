import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { QueryKeyConsts } from 'libs/consts/qureyKey';
import { AxiosError } from 'axios';
import CustomAPiError from 'apis/@error';

const getFistCateListQuery = () => {
  const { data, isLoading, isSuccess, error, refetch } = useQuery(
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
      onError: (error: AxiosError) => {
        new CustomAPiError(error.message, error);
      },
    },
  );

  return { data, isLoading, isSuccess, error, refetch };
};

export default getFistCateListQuery;
