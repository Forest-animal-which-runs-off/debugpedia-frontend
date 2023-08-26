import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import useSWRMutation from 'swr/mutation';

const fetcher = async () => {
  await axios.post(`${import.meta.env.VITE_APP_API_URL}/logout`);
};

export const useLogout = () => {
  const toast = useToast();

  return useSWRMutation('api/post/logout', () => fetcher(), {
    onSuccess: () => {
      toast({
        title: 'ログアウトに成功しました。',
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
          title: 'ログアウトの更新に失敗しました。',
          status: 'error',
        });
      }
    },
  });
};
