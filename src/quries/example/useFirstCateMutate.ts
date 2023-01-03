import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const useFirstCateMutate = () => {
  const { mutate, data, isLoading, error } = useMutation(
    (data: any) => axios.post('/api/cate', data).then((res) => res.data),
    {
      onSuccess: (data) => {
        console.log('data', data);
      },
    },
  );

  return { mutate, data, isLoading, error };
};
export default useFirstCateMutate;
