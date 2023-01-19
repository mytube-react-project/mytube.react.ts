import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { QueryKeyConsts } from 'libs/consts/qureyKey';
import { AxiosError } from 'axios';
import CustomAPiError from 'apis/@error';

const useGetAllCategoryQuery = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isSuccess, error, refetch } = useQuery(
    [QueryKeyConsts.GET_ALL_CATE],
    () => axios.get('/api/cate').then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      onSuccess: (data: any) => {
        queryClient.setQueriesData(
          [QueryKeyConsts.GET_ALL_CATE],
          // FIXME : 리팩토링 필요
          data.map((item: any) => {
            const new_item = item.children.map((cate: any) => {
              return {
                ...cate,
                isSelected: false,
              };
            });
            return {
              ...item,
              children: new_item,
              isToggleOn: true,
              isSelected: false,
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
