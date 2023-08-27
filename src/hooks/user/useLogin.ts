import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import useSWRMutation from 'swr/mutation';

type User = {
  email: string;
  password: string;
};

const fetcher = async (user: User) => {
  await axios.post(`${import.meta.env.VITE_APP_API_URL}/login`, user);
};

export const useLogin = (user: User) => {
  const toast = useToast();

  return useSWRMutation('api/post/login', () => fetcher(user), {
    onSuccess: () => {
      toast({
        title: 'ログインに成功しました。',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    },
    onError: () => {
      toast({
        title: 'ログインに失敗しました。',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
  });
};
