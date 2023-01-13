import { useMutation, useQueryClient } from '@tanstack/react-query';
import CustomAPiError from 'apis/@error';
import axios, { AxiosError } from 'axios';
import { QueryKeyConsts } from '../../libs/consts/qureyKey';

const useUpdateFirstCateMutate = () => {
  const queryClient = useQueryClient();
  return useMutation((data: any) => axios.put(`/api/cate/${data.id}`, { name: data.name }), {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeyConsts.GET_ALL_CATE]);
    },
    onError: (error: AxiosError) => {
      new CustomAPiError(error.message, error);
    },
  });
};

export default useUpdateFirstCateMutate;
