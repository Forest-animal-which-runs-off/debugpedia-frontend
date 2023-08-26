import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import useSWRMutation from 'swr/mutation';
import { Debug } from '../../types';

const fetcher = async (debug: Debug) => {
  await axios.delete(`${import.meta.env.VITE_APP_API_URL}/debugs/${debug.id}`);
};

export const useDeleteDebug = (debug: Debug) => {
  const toast = useToast();

  return useSWRMutation('api/delete/debugs', () => fetcher(debug), {
    onSuccess: () => {
      toast({
        title: 'デバッグの削除に成功しました。',
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
          title: 'デバッグの更新に失敗しました。',
          status: 'error',
        });
      }
    },
  });
};
