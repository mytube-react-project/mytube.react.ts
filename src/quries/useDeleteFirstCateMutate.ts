import { useMutation, useQueryClient } from '@tanstack/react-query';
import CustomAPiError from 'apis/@error';
import axios, { AxiosError } from 'axios';
import { QueryKeyConsts } from '../libs/consts/qureyKey';

const useDeleteFirstCateMutate = () => {
  const queryClient = useQueryClient();
  return useMutation((id: any) => axios.delete(`/api/cate/${id}`).then((res) => res.data), {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeyConsts.GET_FIRST_CATE]);
    },
    onError: (error: AxiosError) => {
      new CustomAPiError(error.message, error);
    },
  });
};

export default useDeleteFirstCateMutate;
