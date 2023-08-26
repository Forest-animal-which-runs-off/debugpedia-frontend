import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import useSWRMutation from 'swr/mutation';

type User = {
  email: string;
  password: string;
  name: string;
};

const fetcher = async (user: User) => {
  await axios.post(`${import.meta.env.VITE_APP_API_URL}/signup`, user);
};

export const useSignup = (user: User) => {
  const toast = useToast();

  return useSWRMutation('api/post/signup', () => fetcher(user), {
    onSuccess: () => {
      toast({
        title: 'サインアップに成功しました。',
        status: 'success',
      });
    },
    onError: (e) => {
      if (e instanceof Error) {
        toast({
          title: e.message,
          status: 'error',
        });
      } else {
        toast({
          title: 'サインアップに失敗しました。',
          status: 'error',
        });
      }
    },
  });
};
