import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AxiosError } from 'axios';
import CustomAPiError from '../../apis/@error';
import { QueryKeyConsts } from '../../libs/consts/qureyKey';

const useGetSecondCateListQuery = (id: number) => {
  const { data, isLoading, isSuccess, error, refetch } = useQuery(
    [QueryKeyConsts.GET_SECOND_CATE, id],
    () => axios.get(`/api/cate/${id}`).then((res) => res.data),
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

export default useGetSecondCateListQuery;
