import { useMutation, useQueryClient } from '@tanstack/react-query';
// import CustomAPiError from 'apis/@error';
import axios, { AxiosError } from 'axios';
import { QueryKeyConsts } from '../libs/consts/qureyKey';

const useUpdateFirstCateMutate = () => {
  const queryClient = useQueryClient();
  return useMutation((data: any) => axios.put(`/api/cate/${data.id}`, { name: data.name }), {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries([QueryKeyConsts.GET_FIRST_CATE]);
    },
    onError: (error: AxiosError) => {
      console.log(error);
      // new CustomAPiError(error.message, error);
    },
  });
};

export default useUpdateFirstCateMutate;
