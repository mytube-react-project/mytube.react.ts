import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { QueryKeyConsts } from 'libs/consts/qureyKey';
import { AxiosError } from 'axios';
import CustomAPiError from 'apis/@error';
import { useSetRecoilState } from 'recoil';
import { allCategoryAtom } from 'atoms/category/atom';

const useGetAllCategoryQuery = () => {
  const queryClient = useQueryClient();
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
        queryClient.setQueriesData(
          [QueryKeyConsts.GET_FIRST_CATE],
          data.map((item: any) => {
            // children edit 추가해야함
            return {
              ...item,
              open: false,
              edit: false,
            };
          }),
        );
      },
      onError: (error: AxiosError) => {
        new CustomAPiError(error.message, error);
      },
    },
  );

  return { data, isLoading, isSuccess, error, refetch };
};

export default useGetAllCategoryQuery;
