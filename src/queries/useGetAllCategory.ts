import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { QueryKeyConsts } from 'libs/consts/qureyKey';
import { AxiosError } from 'axios';
import CustomAPiError from 'apis/@error';
import { useSetRecoilState } from 'recoil';
import { allCategoryAtom } from 'atoms/category/atom';

const useGetAllCategoryQuery = () => {
<<<<<<< HEAD
  const setAllCategory = useSetRecoilState(allCategoryAtom);
=======
  const queryClient = useQueryClient();
>>>>>>> main
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
<<<<<<< HEAD
        setAllCategory(data);
=======
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
>>>>>>> main
      },
      onError: (error: AxiosError) => {
        new CustomAPiError(error.message, error);
      },
    },
  );

  return { data, isLoading, isSuccess, error, refetch };
};

export default useGetAllCategoryQuery;
