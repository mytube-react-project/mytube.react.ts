import { useMutation, useQueryClient } from '@tanstack/react-query';
import CustomAPiError from 'apis/@error';
import axios, { AxiosError } from 'axios';
import { QueryKeyConsts } from '../libs/consts/qureyKey';

const deleteFirstCateMutate = () => {
  const queryClient = useQueryClient();
  return useMutation((id: any) => axios.delete(`/api/cate/${id}`).then((res) => res.data), {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeyConsts.GET_FIRST_CATE]);
    },
    onError: (error: AxiosError) => {
      console.log(error);
      new CustomAPiError(error.message, error);
    },
  });
};

export default deleteFirstCateMutate;
